import { useState } from 'react'

import { AssistantMessage, BrandMark, Composer, Typing, UserBubble } from '@shared/ui'

export function App() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (value: string) => {
    window.alert(`전송: ${value}`)
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <main className="min-h-screen bg-surface px-s5 py-s7 font-pretendard text-ink">
      <section className="mx-auto flex max-w-2xl flex-col gap-s7">
        <div className="flex flex-col gap-s4 rounded-2xl border border-border bg-white p-s6 shadow-card">
          <BrandMark />
          <div>
            <h1 className="text-display">질문 입력 영역</h1>
            <p className="mt-s2 text-body text-muted">
              Composer 컴포넌트 검증 화면입니다.
            </p>
          </div>
        </div>

        <section className="flex flex-col gap-s5 rounded-2xl border border-border bg-white p-s6 shadow-card">
          <UserBubble>수강신청 정정 기간 언제야?</UserBubble>
          {isLoading ? (
            <Typing />
          ) : (
            <AssistantMessage
              subject="수강신청 정정 기간"
              notices={[
                {
                  id: 'n-1',
                  order: 1,
                  category: '학사',
                  title: '2026학년도 1학기 수강신청 정정 기간 안내',
                  source: '학사팀',
                  publishedAt: '2026-05-30',
                  href: 'https://example.com/notice/1',
                },
              ]}
            >
              2026학년도 1학기 수강신청 정정 기간은 3월 2일(월) 10:00 ~ 3월 6일(금) 17:00 입니다.
            </AssistantMessage>
          )}
        </section>

        <div className="rounded-2xl border border-border bg-white p-s4 shadow-pop">
          <Composer onSubmit={handleSubmit} isLoading={isLoading} />
        </div>

        <section className="rounded-2xl border border-border bg-white p-s6 shadow-card">
          <h2 className="text-title">Composer 상태</h2>
          <div className="mt-s5 flex flex-col gap-s4">
            <div>
              <p className="mb-s2 text-meta text-muted">기본</p>
              <Composer onSubmit={() => {}} />
            </div>
            <div>
              <p className="mb-s2 text-meta text-muted">로딩</p>
              <Composer onSubmit={() => {}} isLoading />
            </div>
            <div>
              <p className="mb-s2 text-meta text-muted">비활성</p>
              <Composer onSubmit={() => {}} disabled />
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}
