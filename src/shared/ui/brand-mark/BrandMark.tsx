import { cn } from '../lib/cn'

interface BrandMarkProps {
  className?: string
  compact?: boolean
}

export function BrandMark({ className, compact = false }: BrandMarkProps) {
  return (
    <div className={cn('flex items-center gap-s3 font-pretendard', className)}>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-title text-white shadow-card">
        N
      </span>
      {!compact && (
        <span className="flex flex-col">
          <strong className="text-title text-ink">인하공전 공지챗</strong>
          <span className="text-micro text-muted">학과 공지 도우미</span>
        </span>
      )}
    </div>
  )
}
