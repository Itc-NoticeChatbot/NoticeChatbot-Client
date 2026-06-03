import type { AssistantMessageNotice } from '@shared/ui'
import { AssistantMessage, EmptyState, Typing, UserBubble } from '@shared/ui'

export interface UserMessage {
  id: string
  role: 'user'
  content: string
}

export interface AssistantChatMessage {
  id: string
  role: 'assistant'
  subject: string
  content: string
  sourceQuestion: string
  notices?: AssistantMessageNotice[]
}

export type ChatMessage = UserMessage | AssistantChatMessage

export interface ChatMessageListProps {
  messages: ChatMessage[]
  isLoading?: boolean
  emptyTitle?: string
  emptyDescription?: string
  emptyAction?: React.ReactNode
}

export function ChatMessageList({
  messages,
  isLoading = false,
  emptyTitle = '무엇이 궁금하세요?',
  emptyDescription,
  emptyAction,
}: ChatMessageListProps) {
  if (messages.length === 0 && !isLoading) {
    return <EmptyState title={emptyTitle} description={emptyDescription} action={emptyAction} />
  }

  return (
    <div className="flex flex-col gap-s5">
      {messages.map((msg) =>
        msg.role === 'user' ? (
          <UserBubble key={msg.id}>{msg.content}</UserBubble>
        ) : (
          <AssistantMessage key={msg.id} subject={msg.subject} notices={msg.notices}>
            {msg.content}
          </AssistantMessage>
        ),
      )}
      {isLoading && <Typing />}
    </div>
  )
}
