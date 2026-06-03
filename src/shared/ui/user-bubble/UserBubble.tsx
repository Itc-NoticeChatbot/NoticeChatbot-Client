import type { ReactNode } from 'react'

export interface UserBubbleProps {
  children: ReactNode
}

export function UserBubble({ children }: UserBubbleProps) {
  return (
    <div className="flex justify-end">
      <p className="max-w-[75%] rounded-2xl bg-bubble px-s4 py-s3 font-pretendard text-body text-ink">
        {children}
      </p>
    </div>
  )
}
