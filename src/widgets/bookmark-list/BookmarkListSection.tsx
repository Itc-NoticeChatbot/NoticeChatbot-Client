import { useState } from 'react'

import type { Bookmark } from '@entities/bookmark'
import { BookmarkItem } from '@entities/bookmark'
import { EmptyState, SearchInput } from '@shared/ui'

export interface BookmarkListSectionProps {
  bookmarks: Bookmark[]
  onOpen?: (id: number) => void
  onDelete?: (id: number) => void
}

export function BookmarkListSection({ bookmarks, onOpen, onDelete }: BookmarkListSectionProps) {
  const [keyword, setKeyword] = useState('')

  const filtered = bookmarks.filter((b) =>
    b.title.toLowerCase().includes(keyword.toLowerCase()),
  )

  return (
    <div className="flex flex-col gap-s2">
      <SearchInput
        placeholder="북마크 검색"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      {filtered.length === 0 ? (
        <EmptyState title="북마크 없음" description="공지를 북마크하면 여기에 표시됩니다." />
      ) : (
        filtered.map((bookmark) => (
          <BookmarkItem
            key={bookmark.id}
            title={bookmark.title}
            source={bookmark.source}
            publishedAt={bookmark.publishedAt}
            onOpen={() => onOpen?.(bookmark.id)}
            onDelete={() => onDelete?.(bookmark.id)}
          />
        ))
      )}
    </div>
  )
}
