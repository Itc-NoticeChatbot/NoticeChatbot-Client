import type { FormEvent } from 'react'
import { useState } from 'react'

import { SendButton } from './SendButton'

export interface ComposerProps {
  onSubmit: (value: string) => void
  placeholder?: string
  helperText?: string
  isLoading?: boolean
  disabled?: boolean
}

export function Composer({
  onSubmit,
  placeholder = '예) 이번 주 장학금 관련 공지 알려줘',
  helperText = '공지 데이터 기반 요약 답변 · 정확한 내용은 원문 공지를 확인하세요',
  isLoading = false,
  disabled = false,
}: ComposerProps) {
  const [value, setValue] = useState('')

  const isDisabled = disabled || isLoading
  const canSubmit = value.trim().length > 0 && !isDisabled

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!canSubmit) return
    onSubmit(value.trim())
    setValue('')
  }

  return (
    <div className="flex flex-col gap-s2 font-pretendard">
      <form
        className="flex items-center gap-s2 rounded-2xl border border-border-2 bg-white px-s4 py-s3 transition focus-within:border-accent focus-within:ring-2 focus-within:ring-accent-soft"
        onSubmit={handleSubmit}
      >
        <input
          className="min-w-0 flex-1 bg-transparent text-body text-ink outline-none placeholder:text-faint disabled:cursor-not-allowed disabled:text-faint"
          disabled={isDisabled}
          onChange={(event) => setValue(event.target.value)}
          placeholder={placeholder}
          type="text"
          value={value}
        />
        <SendButton isLoading={isLoading} disabled={!canSubmit} />
      </form>
      {helperText && (
        <p className="text-center text-micro text-faint">{helperText}</p>
      )}
    </div>
  )
}
