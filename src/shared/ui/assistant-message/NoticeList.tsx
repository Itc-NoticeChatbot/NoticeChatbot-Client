import { NoticeCard } from '@entities/notice'

import type { AssistantMessageNotice } from './AssistantMessage'

interface NoticeListProps {
  notices: AssistantMessageNotice[]
}

export function NoticeList({ notices }: NoticeListProps) {
  return (
    <div className="mt-s4">
      <p className="font-pretendard text-meta text-muted">근거 공지 {notices.length}건</p>
      <div className="mt-s2 flex flex-col gap-s2">
        {notices.map((notice) => (
          <NoticeCard
            key={notice.id}
            order={notice.order}
            category={notice.category}
            title={notice.title}
            source={notice.source}
            publishedAt={notice.publishedAt}
            summary={notice.summary}
            href={notice.href}
            isBookmarked={notice.isBookmarked}
            onBookmarkToggle={notice.onBookmarkToggle}
          />
        ))}
      </div>
    </div>
  )
}
