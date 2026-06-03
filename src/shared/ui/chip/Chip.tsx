import type { ButtonHTMLAttributes, ReactNode } from 'react'

import { cn } from '../lib/cn'

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  selected?: boolean
}

export function Chip({
  children,
  className,
  selected = false,
  type = 'button',
  ...props
}: ChipProps) {
  return (
    <button
      className={cn(
        'inline-flex h-8 items-center justify-center rounded-pill border px-s4 font-pretendard text-item transition',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
        'disabled:cursor-not-allowed disabled:border-border disabled:bg-surface-2 disabled:text-faint',
        selected
          ? 'border-accent-border bg-accent-soft text-accent'
          : 'border-border bg-white text-muted hover:border-accent-border hover:text-ink',
        className,
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}
