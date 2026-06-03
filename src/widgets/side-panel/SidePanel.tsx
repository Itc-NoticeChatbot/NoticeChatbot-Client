import { useState } from 'react'

import type { Bookmark } from '@entities/bookmark'
import type { Conversation } from '@entities/conversation'
import { BrandMark, PrimaryButton, Tabs } from '@shared/ui'
import { BookmarkListSection } from '@widgets/bookmark-list'
import { ConvListSection } from '@widgets/conv-list'

const TAB_ITEMS = [
  { key: 'chats', label: '대화' },
  { key: 'bookmarks', label: '북마크' },
]

export interface SidePanelProps {
  conversations: Conversation[]
  bookmarks: Bookmark[]
  activeConvId?: number | null
  onNewChat?: () => void
  onConvSelect?: (id: number) => void
  onBookmarkOpen?: (id: number) => void
  onBookmarkDelete?: (id: number) => void
}

export function SidePanel({
  conversations,
  bookmarks,
  activeConvId,
  onNewChat,
  onConvSelect,
  onBookmarkOpen,
  onBookmarkDelete,
}: SidePanelProps) {
  const [activeTab, setActiveTab] = useState('chats')

  return (
    <aside className="flex h-full w-full flex-col gap-s4 bg-surface px-s4 py-s5">
      <BrandMark />
      <PrimaryButton className="w-full" onClick={onNewChat}>+ 새 질문</PrimaryButton>
      <Tabs activeKey={activeTab} items={TAB_ITEMS} onChange={setActiveTab} />
      <div className="min-h-0 flex-1 overflow-y-auto">
        {activeTab === 'chats' && (
          <ConvListSection
            conversations={conversations}
            activeConvId={activeConvId}
            onSelect={onConvSelect}
          />
        )}
        {activeTab === 'bookmarks' && (
          <BookmarkListSection
            bookmarks={bookmarks}
            onOpen={onBookmarkOpen}
            onDelete={onBookmarkDelete}
          />
        )}
      </div>
    </aside>
  )
}
