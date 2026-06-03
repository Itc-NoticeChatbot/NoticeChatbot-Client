import { useCallback, useEffect, useState } from 'react'

import type { Conversation } from '@entities/conversation'
import type { Notice } from '@entities/notice'
import { deleteChatHistory as apiDeleteHistory, getChatHistories, getNotice } from '@shared/api'

export const useChatHistory = () => {
  const [conversations, setConversations] = useState<Conversation[]>([])

  const loadHistories = useCallback(async () => {
    try {
      const data = await getChatHistories()
      setConversations(data)
    } catch {
      // 히스토리 로드 실패는 사일런트 처리
    }
  }, [])

  useEffect(() => {
    loadHistories()
  }, [loadHistories])

  const deleteConversation = useCallback(async (id: number) => {
    await apiDeleteHistory(id)
    setConversations((prev) => prev.filter((c) => c.id !== id))
  }, [])

  const getConversationNotices = useCallback(async (conv: Conversation): Promise<Notice[]> => {
    const results = await Promise.allSettled(conv.relatedNoticeIds.map((id) => getNotice(id)))
    return results
      .filter((r): r is PromiseFulfilledResult<Notice> => r.status === 'fulfilled')
      .map((r) => r.value)
  }, [])

  return { conversations, loadHistories, deleteConversation, getConversationNotices }
}
