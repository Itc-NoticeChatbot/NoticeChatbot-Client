import { useRef, useState } from 'react'

import type { Bookmark } from '@entities/bookmark'
import type { Conversation } from '@entities/conversation'
import { AssistantMessage, Composer, EmptyState, Typing, UserBubble } from '@shared/ui'
import { SidePanel } from '@widgets/side-panel'

import { MOCK_BOOKMARKS, MOCK_CONVERSATIONS, MOCK_QUICK_QUESTIONS } from '../../app/mocks'

interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
}

export function ChatPage() {
  const [conversations, setConversations] = useState<Conversation[]>(MOCK_CONVERSATIONS)
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(MOCK_BOOKMARKS)
  const [activeConvId, setActiveConvId] = useState<string>(MOCK_CONVERSATIONS[0]?.id ?? '')
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const msgIdRef = useRef(0)

  const handleSubmit = (value: string) => {
    const userMsg: ChatMessage = { id: `u-${++msgIdRef.current}`, role: 'user', content: value }
    setMessages((prev) => [...prev, userMsg])
    setIsLoading(true)

    setTimeout(() => {
      const assistantMsg: ChatMessage = {
        id: `a-${++msgIdRef.current}`,
        role: 'assistant',
        content: `"${value}"에 대한 답변입니다. 관련 공지를 확인해보세요.`,
      }
      setMessages((prev) => [...prev, assistantMsg])
      setIsLoading(false)

      const newConv: Conversation = {
        id: `c-${++msgIdRef.current}`,
        question: value,
        createdAt: new Date(Date.now()).toLocaleDateString('ko-KR'),
      }
      setConversations((prev) => [newConv, ...prev])
      setActiveConvId(newConv.id)
    }, 1500)
  }

  const handleBookmarkDelete = (id: string) => {
    setBookmarks((prev) => prev.filter((b) => b.id !== id))
  }

  return (
    <div className="flex h-screen bg-surface font-pretendard text-ink">
      {/* 사이드 패널 — 데스크톱에서만 표시 */}
      <div className="hidden w-72 shrink-0 border-r border-border md:flex">
        <SidePanel
          conversations={conversations}
          bookmarks={bookmarks}
          activeConvId={activeConvId}
          onConvSelect={setActiveConvId}
          onBookmarkDelete={handleBookmarkDelete}
        />
      </div>

      {/* 메인 채팅 영역 */}
      <main className="flex min-w-0 flex-1 flex-col">
        <div className="flex-1 overflow-y-auto px-s5 py-s6">
          <div className="mx-auto flex max-w-2xl flex-col gap-s5">
            {messages.length === 0 ? (
              <EmptyState
                title="무엇이 궁금하세요?"
                description="공지 관련 질문을 입력해보세요."
                action={
                  <div className="flex flex-wrap justify-center gap-s2">
                    {MOCK_QUICK_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        type="button"
                        className="rounded-pill border border-border px-s4 py-s2 text-item text-muted transition hover:border-accent-border hover:text-accent"
                        onClick={() => handleSubmit(q)}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                }
              />
            ) : (
              messages.map((msg) =>
                msg.role === 'user' ? (
                  <UserBubble key={msg.id}>{msg.content}</UserBubble>
                ) : (
                  <AssistantMessage key={msg.id} subject="답변">
                    {msg.content}
                  </AssistantMessage>
                ),
              )
            )}
            {isLoading && <Typing />}
          </div>
        </div>

        <div className="border-t border-border bg-white px-s5 py-s4 shadow-pop">
          <div className="mx-auto max-w-2xl">
            <Composer onSubmit={handleSubmit} isLoading={isLoading} />
          </div>
        </div>
      </main>
    </div>
  )
}
