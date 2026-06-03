export interface BookmarkItemProps {
  title: string
  source: string
  publishedAt: string
  onOpen?: () => void
  onDelete?: () => void
}

export function BookmarkItem({
  title,
  source,
  publishedAt,
  onOpen,
  onDelete,
}: BookmarkItemProps) {
  return (
    <article className="flex items-center justify-between gap-s3 rounded-lg border border-border bg-white px-s3 py-s2 shadow-card">
      <button
        type="button"
        className="min-w-0 flex-1 text-left"
        onClick={onOpen}
        disabled={!onOpen}
      >
        <span className="line-clamp-1 text-item text-ink">{title}</span>
        <span className="mt-s1 block text-micro text-muted">
          {source} · {publishedAt}
        </span>
      </button>

      {onDelete ? (
        <button
          type="button"
          className="shrink-0 rounded-sm px-s2 py-s1 text-micro font-semibold text-faint transition hover:bg-surface-3 hover:text-danger"
          aria-label={`${title} 북마크 삭제`}
          onClick={onDelete}
        >
          삭제
        </button>
      ) : null}
    </article>
  )
}
