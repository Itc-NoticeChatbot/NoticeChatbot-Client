export interface ConvItemProps {
  question: string
  createdAt: string
  answerPreview?: string
  isActive?: boolean
  onSelect?: () => void
}

export function ConvItem({
  question,
  createdAt,
  answerPreview,
  isActive = false,
  onSelect,
}: ConvItemProps) {
  const content = (
    <>
      <span className="line-clamp-1 text-item text-ink">{question}</span>
      {answerPreview ? (
        <span className="line-clamp-1 text-micro text-muted">{answerPreview}</span>
      ) : null}
      <span className="text-micro text-faint">{createdAt}</span>
    </>
  )

  if (!onSelect) {
    return (
      <article
        className={getConvItemClassName(isActive)}
        aria-current={isActive ? 'true' : undefined}
      >
        {content}
      </article>
    )
  }

  return (
    <button
      type="button"
      className={`${getConvItemClassName(isActive)} w-full text-left transition hover:border-accent-border hover:bg-accent-soft`}
      aria-current={isActive ? 'true' : undefined}
      onClick={onSelect}
    >
      {content}
    </button>
  )
}

function getConvItemClassName(isActive: boolean) {
  return [
    'flex flex-col gap-s1 rounded-lg border px-s3 py-s2',
    isActive
      ? 'border-accent-border bg-accent-soft shadow-card'
      : 'border-transparent bg-white',
  ].join(' ')
}
