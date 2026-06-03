import { useState } from 'react'

import { BrandMark, Chip, PrimaryButton, SearchInput, Tabs } from '@shared/ui'

const tabItems = [
  { key: 'chats', label: '대화' },
  { key: 'bookmarks', label: '북마크' },
]

const exampleQuestions = ['장학금 공지', '수강신청 정정', '졸업작품']

export function App() {
  const [activeTab, setActiveTab] = useState('chats')
  const [selectedChip, setSelectedChip] = useState(exampleQuestions[0])
  const [searchKeyword, setSearchKeyword] = useState('')

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
              {exampleQuestions.map((question) => (
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
      </section>
    </main>
  )
}
