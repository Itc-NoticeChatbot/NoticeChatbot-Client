import type { ReactNode } from 'react'

export interface EmptyStateProps {
  title: string
  description?: string
  action?: ReactNode
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-s3 py-s8 font-pretendard text-center">
      <p className="text-title text-ink">{title}</p>
      {description && <p className="text-body text-muted">{description}</p>}
      {action && <div className="mt-s2">{action}</div>}
    </div>
  )
}
