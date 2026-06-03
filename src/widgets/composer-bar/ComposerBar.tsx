import { Composer } from '@shared/ui'

export interface ComposerBarProps {
  onSubmit: (value: string) => void
  isLoading?: boolean
  disabled?: boolean
}

export function ComposerBar({ onSubmit, isLoading = false, disabled = false }: ComposerBarProps) {
  return (
    <div className="border-t border-border bg-white px-s5 py-s4 shadow-pop">
      <div className="mx-auto max-w-2xl">
        <Composer onSubmit={onSubmit} isLoading={isLoading} disabled={disabled} />
      </div>
    </div>
  )
}
