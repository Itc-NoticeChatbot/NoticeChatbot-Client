import { AssistantMessage, BrandMark, Typing, UserBubble } from '@shared/ui'

export function App() {
  return (
    <main className="min-h-screen bg-surface px-s5 py-s7 font-pretendard text-ink">
      <section className="mx-auto flex max-w-2xl flex-col gap-s7">
        <div className="flex flex-col gap-s4 rounded-2xl border border-border bg-white p-s6 shadow-card">
          <BrandMark />
          <div>
            <h1 className="text-display">채팅 메시지 계층</h1>
            <p className="mt-s2 text-body text-muted">
              UserBubble, Typing, AssistantMessage 검증 화면입니다.
            </p>
          </div>
        </div>

        <section className="rounded-2xl border border-border bg-white p-s6 shadow-card">
          <div className="flex flex-col gap-s5">
            <UserBubble>수강신청 정정 기간 언제야?</UserBubble>
            <Typing />
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
              2026학년도 1학기 수강신청 정정 기간은 3월 2일(월) 10:00 ~ 3월 6일(금) 17:00 입니다. 정정은 학사정보시스템에서 가능합니다.
            </AssistantMessage>
            <UserBubble>장학금 신청 어떻게 해?</UserBubble>
            <AssistantMessage
              subject="장학금 신청"
              notices={[
                {
                  id: 'n-2',
                  order: 1,
                  category: '장학',
                  title: '2026-1학기 교내장학금 신청 마감 D-3',
                  source: '장학팀',
                  publishedAt: '2026-03-01',
                  summary: '교내 우수장학금 신청 마감이 3일 남았습니다. 학생지원시스템에서 신청하세요.',
                },
              ]}
            >
              교내 장학금은 학생지원시스템 &gt; 장학 메뉴에서 신청할 수 있습니다.
            </AssistantMessage>
          </div>
        </section>
      </section>
    </main>
  )
}
