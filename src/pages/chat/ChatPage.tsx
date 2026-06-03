import { useMemo, useRef, useState } from 'react'

import { MOCK_QUICK_QUESTIONS } from '@app/mocks'
import { useAskQuestion } from '@features/ask-question'
import { useBookmarks } from '@features/bookmarks'
import { useChatHistory } from '@features/chat-history'
import { Chip } from '@shared/ui'
import type { AssistantChatMessage, ChatMessage } from '@widgets/chat-message-list'
import { ChatMessageList } from '@widgets/chat-message-list'
import { ComposerBar } from '@widgets/composer-bar'
import { SidePanel } from '@widgets/side-panel'

export function ChatPage() {
  const { sendQuestion, isLoading: isAsking } = useAskQuestion()
  const { conversations, loadHistories, getConversationNotices } = useChatHistory()
  const { bookmarks, addBookmark, removeBookmark } = useBookmarks()

  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [activeConvId, setActiveConvId] = useState<number | null>(null)
  const [isLoadingHistory, setIsLoadingHistory] = useState(false)
  const msgIdRef = useRef(0)

  const isLoading = isAsking || isLoadingHistory

  const activeQuestion = useMemo(() => {
    const firstUserMsg = messages.find((m) => m.role === 'user')
    return firstUserMsg?.content ?? ''
  }, [messages])

  const displayMessages = useMemo(() => {
    return messages.map((msg) => {
      if (msg.role !== 'assistant' || !msg.notices) return msg
      const sourceQ = msg.sourceQuestion
      return {
        ...msg,
        notices: msg.notices.map((n) => ({
          ...n,
          isBookmarked: bookmarks.some((b) => b.noticeId === n.id),
          onBookmarkToggle: () => {
            const existing = bookmarks.find((b) => b.noticeId === n.id)
            if (existing) {
              removeBookmark(existing.id)
            } else {
              addBookmark(n.id, sourceQ)
            }
          },
        })),
      }
    })
  }, [messages, bookmarks, addBookmark, removeBookmark])

  const handleSubmit = async (value: string) => {
    const userMsg: ChatMessage = { id: `u-${++msgIdRef.current}`, role: 'user', content: value }
    setMessages((prev) => [...prev, userMsg])

    const result = await sendQuestion(value)
    if (!result) return

    const assistantMsg: AssistantChatMessage = {
      id: `a-${++msgIdRef.current}`,
      role: 'assistant',
      subject: 'AI 답변',
      content: result.answer,
      sourceQuestion: value,
      notices: result.relatedNotices.map((notice, i) => ({
        ...notice,
        order: i + 1,
      })),
    }
    setMessages((prev) => [...prev, assistantMsg])
    await loadHistories()
  }

  const handleConvSelect = async (id: number) => {
    const conv = conversations.find((c) => c.id === id)
    if (!conv) return

    setActiveConvId(id)
    setIsLoadingHistory(true)

    try {
      const relatedNotices = await getConversationNotices(conv)
      const userMsg: ChatMessage = {
        id: `u-hist-${id}`,
        role: 'user',
        content: conv.question,
      }
      const assistantMsg: AssistantChatMessage = {
        id: `a-hist-${id}`,
        role: 'assistant',
        subject: 'AI 답변',
        content: conv.answer,
        sourceQuestion: conv.question,
        notices: relatedNotices.map((notice, i) => ({
          ...notice,
          order: i + 1,
        })),
      }
      setMessages([userMsg, assistantMsg])
    } finally {
      setIsLoadingHistory(false)
    }
  }

  const handleNewChat = () => {
    setMessages([])
    setActiveConvId(null)
  }

  const handleBookmarkDelete = (id: number) => {
    removeBookmark(id)
  }

  return (
    <div className="flex h-screen bg-surface font-pretendard text-ink">
      <div className="hidden w-72 shrink-0 border-r border-border md:flex">
        <SidePanel
          conversations={conversations}
          bookmarks={bookmarks}
          activeConvId={activeConvId}
          onNewChat={handleNewChat}
          onConvSelect={handleConvSelect}
          onBookmarkDelete={handleBookmarkDelete}
        />
      </div>

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center gap-s3 border-b border-border bg-white px-s5 py-s3">
          <h1 className="truncate font-pretendard text-label font-semibold text-ink">
            {activeQuestion || '새 질문'}
          </h1>
          <span className="shrink-0 text-meta text-muted">학과 공지사항 챗봇</span>
        </header>

        <div className="flex-1 overflow-y-auto px-s5 py-s6">
          <div className="mx-auto max-w-2xl">
            <ChatMessageList
              messages={displayMessages}
              isLoading={isLoading}
              emptyDescription="공지 관련 질문을 입력해보세요."
              emptyAction={
                <div className="flex flex-wrap justify-center gap-s2">
                  {MOCK_QUICK_QUESTIONS.map((q) => (
                    <Chip key={q} onClick={() => handleSubmit(q)}>
                      {q}
                    </Chip>
                  ))}
                </div>
              }
            />
          </div>
        </div>
        <ComposerBar onSubmit={handleSubmit} isLoading={isLoading} />
      </main>
    </div>
  )
}
