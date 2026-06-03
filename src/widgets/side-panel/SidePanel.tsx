import { useState } from 'react'

import type { Bookmark } from '@entities/bookmark'
import { BookmarkItem } from '@entities/bookmark'
import type { Conversation } from '@entities/conversation'
import { ConvItem } from '@entities/conversation'
import { BrandMark, EmptyState, SearchInput, Tabs } from '@shared/ui'

const TAB_ITEMS = [
  { key: 'chats', label: '대화' },
  { key: 'bookmarks', label: '북마크' },
]

export interface SidePanelProps {
  conversations: Conversation[]
  bookmarks: Bookmark[]
  activeConvId?: string
  onConvSelect?: (id: string) => void
  onBookmarkOpen?: (id: string) => void
  onBookmarkDelete?: (id: string) => void
}

export function SidePanel({
  conversations,
  bookmarks,
  activeConvId,
  onConvSelect,
  onBookmarkOpen,
  onBookmarkDelete,
}: SidePanelProps) {
  const [activeTab, setActiveTab] = useState('chats')
  const [searchKeyword, setSearchKeyword] = useState('')

  const filteredBookmarks = bookmarks.filter((b) =>
    b.title.toLowerCase().includes(searchKeyword.toLowerCase()),
  )

  return (
    <aside className="flex h-full w-full flex-col gap-s4 bg-surface px-s4 py-s5">
      <BrandMark />
      <Tabs activeKey={activeTab} items={TAB_ITEMS} onChange={setActiveTab} />

      <div className="flex min-h-0 flex-1 flex-col gap-s2 overflow-y-auto">
        {activeTab === 'chats' && (
          conversations.length === 0 ? (
            <EmptyState title="대화 없음" description="첫 질문을 입력해보세요." />
          ) : (
            conversations.map((conv) => (
              <ConvItem
                key={conv.id}
                question={conv.question}
                createdAt={conv.createdAt}
                answerPreview={conv.answerPreview}
                isActive={activeConvId === conv.id}
                onSelect={() => onConvSelect?.(conv.id)}
              />
            ))
          )
        )}

        {activeTab === 'bookmarks' && (
          <>
            <SearchInput
              placeholder="북마크 검색"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            {filteredBookmarks.length === 0 ? (
              <EmptyState title="북마크 없음" description="공지를 북마크하면 여기에 표시됩니다." />
            ) : (
              filteredBookmarks.map((bookmark) => (
                <BookmarkItem
                  key={bookmark.id}
                  title={bookmark.title}
                  source={bookmark.source}
                  publishedAt={bookmark.publishedAt}
                  onOpen={() => onBookmarkOpen?.(bookmark.id)}
                  onDelete={() => onBookmarkDelete?.(bookmark.id)}
                />
              ))
            )}
          </>
        )}
      </div>
    </aside>
  )
}
