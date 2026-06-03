import type { InputHTMLAttributes } from 'react'

import { cn } from '../lib/cn'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function SearchInput({ className, type = 'search', ...props }: SearchInputProps) {
  return (
    <label
      className={cn(
        'flex h-10 items-center gap-s2 rounded-lg border border-border-2 bg-white px-s3 text-muted transition',
        'focus-within:border-accent focus-within:ring-2 focus-within:ring-accent-soft',
        className,
      )}
    >
      <svg
        aria-hidden="true"
        className="h-4 w-4 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="m20 20-4.2-4.2m1.2-5.3a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
      <input
        className="min-w-0 flex-1 bg-transparent font-pretendard text-body text-ink outline-none placeholder:text-faint disabled:cursor-not-allowed disabled:text-faint"
        type={type}
        {...props}
      />
    </label>
  )
}
