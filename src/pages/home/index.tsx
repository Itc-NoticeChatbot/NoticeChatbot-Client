import { NoticeSearchForm } from '@features/notice-search/ui/NoticeSearchForm'
import { NoticeList } from '@features/notice-list/ui/NoticeList'
import { PageSection } from '@shared/ui/PageSection'

export function HomePage() {
  return (
    <main className="page">
      <header className="page__header">
        <h1>Notice Chatbot</h1>
        <p>기능별 아키텍처 초기 세팅</p>
      </header>

      <PageSection title="공지 검색">
        <NoticeSearchForm />
      </PageSection>

      <PageSection title="최근 공지">
        <NoticeList />
      </PageSection>
    </main>
  )
}
