import { BrandMark } from '../brand-mark/BrandMark'

export function Typing() {
  return (
    <div className="flex items-center gap-s3">
      <BrandMark compact />
      <div className="flex items-center gap-s1">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-s2 w-s2 rounded-full bg-faint animate-bounce"
            style={{ animationDelay: `${i * 150}ms` }}
          />
        ))}
      </div>
    </div>
  )
}
