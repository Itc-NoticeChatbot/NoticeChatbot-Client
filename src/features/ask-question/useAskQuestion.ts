import { useState } from 'react'

import type { Notice } from '@entities/notice'
import { askQuestion as apiAskQuestion, getNotice } from '@shared/api'

interface AskResult {
  answer: string
  relatedNotices: Notice[]
}

export const useAskQuestion = () => {
  const [isLoading, setIsLoading] = useState(false)

  const sendQuestion = async (question: string): Promise<AskResult | null> => {
    setIsLoading(true)
    try {
      const { answer, relatedNoticeIds } = await apiAskQuestion(question)
      const results = await Promise.allSettled(relatedNoticeIds.map((id) => getNotice(id)))
      const relatedNotices = results
        .filter((r): r is PromiseFulfilledResult<Notice> => r.status === 'fulfilled')
        .map((r) => r.value)
      return { answer, relatedNotices }
    } catch {
      return null
    } finally {
      setIsLoading(false)
    }
  }

  return { sendQuestion, isLoading }
}
