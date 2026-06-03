export interface ErrorStateProps {
  message?: string
  onRetry?: () => void
}

export function ErrorState({
  message = '오류가 발생했습니다.',
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-s3 py-s8 font-pretendard text-center">
      <p className="text-title text-ink">{message}</p>
      {onRetry && (
        <button
          type="button"
          className="rounded-pill border border-border-2 px-s4 py-s2 text-label text-muted transition hover:border-accent-border hover:text-accent"
          onClick={onRetry}
        >
          다시 시도
        </button>
      )}
    </div>
  )
}
