import { useState } from 'react'

import type { Bookmark } from '@entities/bookmark'
import { BookmarkItem } from '@entities/bookmark'
import { ConvItem } from '@entities/conversation'
import { NoticeCard } from '@entities/notice'
import { BrandMark, Chip, PrimaryButton, SearchInput, Tabs } from '@shared/ui'

import {
  MOCK_BOOKMARKS,
  MOCK_CONVERSATIONS,
  MOCK_NOTICES,
  MOCK_QUICK_QUESTIONS,
} from './mocks'

const tabItems = [
  { key: 'chats', label: '대화' },
  { key: 'bookmarks', label: '북마크' },
]

export function App() {
  const [activeTab, setActiveTab] = useState('chats')
  const [selectedChip, setSelectedChip] = useState(MOCK_QUICK_QUESTIONS[0])
  const [searchKeyword, setSearchKeyword] = useState('')
  const [bookmarkedNoticeIds, setBookmarkedNoticeIds] = useState<string[]>(['n-2'])
  const [activeConvId, setActiveConvId] = useState<string>('c-1')
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(MOCK_BOOKMARKS)

  const handleNoticeBookmarkToggle = (id: string) => {
    setBookmarkedNoticeIds((prev) =>
      prev.includes(id) ? prev.filter((value) => value !== id) : [...prev, id],
    )
  }

  const handleBookmarkDelete = (id: string) => {
    setBookmarks((prev) => prev.filter((bookmark) => bookmark.id !== id))
  }

  const handleBookmarkOpen = (title: string) => {
    window.alert(`열기: ${title}`)
  }

  return (
    <main className="min-h-screen bg-surface px-s5 py-s7 font-pretendard text-ink">
      <section className="mx-auto flex max-w-4xl flex-col gap-s7">
        <div className="flex flex-col gap-s4 rounded-2xl border border-border bg-white p-s6 shadow-card">
          <BrandMark />
          <div>
            <h1 className="text-display">공통 베이스 UI</h1>
            <p className="mt-s2 text-body text-muted">
              디자인 시스템 기준의 버튼, 탭, 칩, 검색 입력, 브랜드 마크 검증 화면입니다.
            </p>
          </div>
        </div>

        <div className="grid gap-s5 md:grid-cols-2">
          <section className="rounded-2xl border border-border bg-white p-s6 shadow-card">
            <h2 className="text-title">PrimaryButton</h2>
            <div className="mt-s5 flex flex-wrap items-center gap-s3">
              <PrimaryButton>새 질문</PrimaryButton>
              <PrimaryButton size="sm">전송</PrimaryButton>
              <PrimaryButton disabled>처리 중</PrimaryButton>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-white p-s6 shadow-card">
            <h2 className="text-title">Tabs</h2>
            <div className="mt-s5">
              <Tabs activeKey={activeTab} items={tabItems} onChange={setActiveTab} />
            </div>
            <p className="mt-s4 text-meta text-muted">현재 탭: {activeTab}</p>
          </section>

          <section className="rounded-2xl border border-border bg-white p-s6 shadow-card">
            <h2 className="text-title">Chip</h2>
            <div className="mt-s5 flex flex-wrap gap-s2">
              {MOCK_QUICK_QUESTIONS.map((question) => (
                <Chip
                  key={question}
                  onClick={() => setSelectedChip(question)}
                  selected={selectedChip === question}
                >
                  {question}
                </Chip>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-white p-s6 shadow-card">
            <h2 className="text-title">SearchInput</h2>
            <SearchInput
              className="mt-s5"
              onChange={(event) => setSearchKeyword(event.target.value)}
              placeholder="북마크 검색"
              value={searchKeyword}
            />
          </section>
        </div>

        <section className="rounded-2xl border border-border bg-white p-s6 shadow-card">
          <h2 className="text-title">BrandMark</h2>
          <div className="mt-s5 flex flex-wrap items-center gap-s6">
            <BrandMark />
            <BrandMark compact />
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-white p-s6 shadow-card">
          <h2 className="text-title">NoticeCard</h2>
          <p className="mt-s2 text-meta text-muted">
            카드의 북마크 버튼을 눌러 토글 상태를 확인할 수 있습니다.
          </p>
          <div className="mt-s5 flex flex-col gap-s3">
            {MOCK_NOTICES.map((notice, index) => (
              <NoticeCard
                key={notice.id}
                order={index + 1}
                category={notice.category}
                title={notice.title}
                source={notice.source}
                publishedAt={notice.publishedAt}
                summary={notice.summary}
                href={notice.href}
                isBookmarked={bookmarkedNoticeIds.includes(notice.id)}
                onBookmarkToggle={() => handleNoticeBookmarkToggle(notice.id)}
              />
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-white p-s6 shadow-card">
          <h2 className="text-title">ConvItem</h2>
          <p className="mt-s2 text-meta text-muted">
            활성 상태 표시와 선택 핸들러를 검증합니다.
          </p>
          <div className="mt-s5 flex flex-col gap-s2">
            {MOCK_CONVERSATIONS.map((conv) => (
              <ConvItem
                key={conv.id}
                question={conv.question}
                createdAt={conv.createdAt}
                answerPreview={conv.answerPreview}
                isActive={activeConvId === conv.id}
                onSelect={() => setActiveConvId(conv.id)}
              />
            ))}
          </div>
          <p className="mt-s4 text-meta text-muted">현재 선택된 대화 ID: {activeConvId}</p>
        </section>

        <section className="rounded-2xl border border-border bg-white p-s6 shadow-card">
          <h2 className="text-title">BookmarkItem</h2>
          <p className="mt-s2 text-meta text-muted">
            열기는 alert로, 삭제는 목록에서 제거됩니다.
          </p>
          <div className="mt-s5 flex flex-col gap-s2">
            {bookmarks.length === 0 ? (
              <p className="text-item text-muted">삭제로 인해 북마크가 비었습니다.</p>
            ) : (
              bookmarks.map((bookmark) => (
                <BookmarkItem
                  key={bookmark.id}
                  title={bookmark.title}
                  source={bookmark.source}
                  publishedAt={bookmark.publishedAt}
                  onOpen={() => handleBookmarkOpen(bookmark.title)}
                  onDelete={() => handleBookmarkDelete(bookmark.id)}
                />
              ))
            )}
          </div>
        </section>
      </section>
    </main>
  )
}
