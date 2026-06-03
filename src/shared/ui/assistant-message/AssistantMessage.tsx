import type { ReactNode } from 'react'

import { BrandMark } from '../brand-mark/BrandMark'
import { NoticeList } from './NoticeList'

export interface AssistantMessageNotice {
  id: string
  order: number
  category: string
  title: string
  source: string
  publishedAt: string
  summary?: string
  href?: string
  isBookmarked?: boolean
  onBookmarkToggle?: () => void
}

export interface AssistantMessageProps {
  subject: string
  children: ReactNode
  notices?: AssistantMessageNotice[]
}

export function AssistantMessage({ subject, children, notices }: AssistantMessageProps) {
  return (
    <div className="flex gap-s3">
      <div className="shrink-0 pt-s1">
        <BrandMark compact />
      </div>
      <div className="min-w-0 flex-1">
        <span className="inline-block rounded-md bg-accent-soft px-s3 py-s1 font-pretendard text-cap text-accent">
          {subject}
        </span>
        <p className="mt-s3 font-pretendard text-body text-ink leading-relaxed">{children}</p>
        {notices && notices.length > 0 && <NoticeList notices={notices} />}
      </div>
    </div>
  )
}
