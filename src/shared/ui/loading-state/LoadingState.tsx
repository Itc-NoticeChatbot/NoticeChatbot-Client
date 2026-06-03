export function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center gap-s3 py-s8 font-pretendard">
      <div className="flex items-center gap-s1">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-s2 w-s2 rounded-full bg-accent animate-bounce"
            style={{ animationDelay: `${i * 150}ms` }}
          />
        ))}
      </div>
      <p className="text-meta text-muted">불러오는 중...</p>
    </div>
  )
}
