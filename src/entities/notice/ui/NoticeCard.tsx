import { cn } from '@shared/ui/lib/cn'

export interface NoticeCardProps {
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

export function NoticeCard({
  order,
  category,
  title,
  source,
  publishedAt,
  summary,
  href,
  isBookmarked = false,
  onBookmarkToggle,
}: NoticeCardProps) {
  return (
    <article className="rounded-xl border border-border bg-white p-s3 shadow-card">
      <div className="flex gap-s3">
        <span className="flex h-s6 w-s6 shrink-0 items-center justify-center rounded-sm bg-surface-3 text-cap text-accent">
          {order}
        </span>

        <div className="min-w-0 flex-1">
          <p className="text-micro text-muted">{category}</p>
          <h3 className="mt-s1 line-clamp-2 text-title text-ink">{title}</h3>
          <p className="mt-s1 text-micro text-muted">
            {source} · {publishedAt}
          </p>
          {summary ? (
            <p className="mt-s2 line-clamp-2 text-item text-muted">{summary}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-s3 flex items-center justify-end gap-s2">
        {href ? (
          <a
            className="rounded-sm border border-border-2 px-s3 py-s1 text-micro font-semibold text-muted transition hover:border-accent-border hover:text-accent"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            링크
          </a>
        ) : null}

        <button
          type="button"
          className={cn(
            'rounded-sm border px-s3 py-s1 text-micro font-semibold transition',
            isBookmarked
              ? 'border-accent-border bg-accent-soft text-accent'
              : 'border-border-2 bg-white text-muted hover:border-accent-border hover:text-accent',
          )}
          aria-pressed={isBookmarked}
          onClick={onBookmarkToggle}
          disabled={!onBookmarkToggle}
        >
          {isBookmarked ? '저장됨' : '북마크'}
        </button>
      </div>
    </article>
  )
}
