import type { Conversation } from '@entities/conversation'
import { ConvItem } from '@entities/conversation'
import { EmptyState } from '@shared/ui'

export interface ConvListSectionProps {
  conversations: Conversation[]
  activeConvId?: string
  onSelect?: (id: string) => void
}

export function ConvListSection({ conversations, activeConvId, onSelect }: ConvListSectionProps) {
  if (conversations.length === 0) {
    return <EmptyState title="대화 없음" description="첫 질문을 입력해보세요." />
  }

  return (
    <div className="flex flex-col gap-s2">
      {conversations.map((conv) => (
        <ConvItem
          key={conv.id}
          question={conv.question}
          createdAt={conv.createdAt}
          answerPreview={conv.answerPreview}
          isActive={activeConvId === conv.id}
          onSelect={() => onSelect?.(conv.id)}
        />
      ))}
    </div>
  )
}
