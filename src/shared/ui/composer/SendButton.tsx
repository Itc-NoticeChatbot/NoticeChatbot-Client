interface SendButtonProps {
  disabled?: boolean
  isLoading?: boolean
}

export function SendButton({ disabled = false, isLoading = false }: SendButtonProps) {
  return (
    <button
      aria-label="전송"
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent text-white shadow-card transition hover:brightness-95 disabled:bg-border-2 disabled:shadow-none"
      disabled={disabled}
      type="submit"
    >
      {isLoading ? (
        <span className="h-3 w-3 rounded-full border-2 border-white border-t-transparent animate-spin" />
      ) : (
        <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
          <path
            d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      )}
    </button>
  )
}
