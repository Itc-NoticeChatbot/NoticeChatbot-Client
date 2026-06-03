import { cn } from '../lib/cn'

export interface TabItem {
  key: string
  label: string
}

export interface TabsProps {
  activeKey: string
  items: TabItem[]
  onChange: (key: string) => void
  className?: string
}

export function Tabs({ activeKey, className, items, onChange }: TabsProps) {
  return (
    <div
      className={cn(
        'inline-flex rounded-pill bg-surface-2 p-s1 font-pretendard',
        className,
      )}
      role="tablist"
    >
      {items.map((item) => {
        const selected = item.key === activeKey

        return (
          <button
            aria-selected={selected}
            className={cn(
              'h-8 rounded-pill px-s5 text-label transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
              selected
                ? 'bg-white text-ink shadow-card'
                : 'text-muted hover:text-ink',
            )}
            key={item.key}
            onClick={() => onChange(item.key)}
            role="tab"
            type="button"
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}
