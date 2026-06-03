import { useRef, useState } from 'react'

import type { Bookmark } from '@entities/bookmark'
import type { Conversation } from '@entities/conversation'
import { MOCK_BOOKMARKS, MOCK_CONVERSATIONS, MOCK_QUICK_QUESTIONS } from '@app/mocks'
import { Chip } from '@shared/ui'
import { ComposerBar } from '@widgets/composer-bar'
import type { ChatMessage } from '@widgets/chat-message-list'
import { ChatMessageList } from '@widgets/chat-message-list'
import { SidePanel } from '@widgets/side-panel'

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
        subject: '답변',
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
      <div className="hidden w-72 shrink-0 border-r border-border md:flex">
        <SidePanel
          conversations={conversations}
          bookmarks={bookmarks}
          activeConvId={activeConvId}
          onConvSelect={setActiveConvId}
          onBookmarkDelete={handleBookmarkDelete}
        />
      </div>

      <main className="flex min-w-0 flex-1 flex-col">
        <div className="flex-1 overflow-y-auto px-s5 py-s6">
          <div className="mx-auto max-w-2xl">
            <ChatMessageList
              messages={messages}
              isLoading={isLoading}
              emptyDescription="공지 관련 질문을 입력해보세요."
              emptyAction={
                <div className="flex flex-wrap justify-center gap-s2">
                  {MOCK_QUICK_QUESTIONS.map((q) => (
                    <Chip key={q} onClick={() => handleSubmit(q)}>{q}</Chip>
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
