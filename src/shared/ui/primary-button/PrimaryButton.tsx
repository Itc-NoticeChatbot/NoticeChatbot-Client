import type { ButtonHTMLAttributes, ReactNode } from 'react'

import { cn } from '../lib/cn'

type PrimaryButtonSize = 'sm' | 'md'

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  size?: PrimaryButtonSize
}

const sizeClassNames: Record<PrimaryButtonSize, string> = {
  sm: 'h-8 px-s4 text-meta',
  md: 'h-10 px-s5 text-label',
}

export function PrimaryButton({
  children,
  className,
  size = 'md',
  type = 'button',
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-pill bg-accent font-pretendard text-white shadow-card transition',
        'hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
        'disabled:cursor-not-allowed disabled:bg-border-2 disabled:text-faint disabled:shadow-none',
        sizeClassNames[size],
        className,
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}
