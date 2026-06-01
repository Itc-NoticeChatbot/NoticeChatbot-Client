# NoticeChatbot-Client

기능별(Feature-based) 아키텍처 기반 클라이언트입니다.

## Run

```bash
pnpm install
pnpm dev
```

## Lint & Format

- Lint: `pnpm lint`
- Format: `pnpm format`
- Format Check: `pnpm format:check`

### Rules

- ESLint: `eslint.config.js`
- Prettier: `.prettierrc.json`
- Ignore: `.prettierignore`

## Architecture (Rough)

- `src/app`: 앱 엔트리/전역 provider
- `src/pages`: 페이지 단위 조합
- `src/features`: 기능 단위 UI/로직
- `src/shared`: 공통 UI/스타일/유틸

## Alias

- `@app/*` -> `src/app/*`
- `@pages/*` -> `src/pages/*`
- `@features/*` -> `src/features/*`
- `@shared/*` -> `src/shared/*`

## HTTP Client (Axios)

- 공통 인스턴스: `src/shared/api/http.ts`
- baseURL: `VITE_API_BASE_URL` 환경 변수를 사용

```ts
import { http } from '@shared/api'

const response = await http.get('/notices')
```

## Design Tokens (Tailwind)

- Tailwind 설정: `tailwind.config.cjs`, `postcss.config.cjs`
- 컬러 토큰: `src/shared/styles/tokens/colors.tokens.css`
- 폰트 토큰: `src/shared/styles/tokens/typography.tokens.css`
- 전역 적용: `src/shared/styles/global.css`

예시:

```tsx
<div className="bg-surface text-ink border border-border rounded-lg p-s4">
  <h2 className="font-pretendard text-title">토큰 적용 예시</h2>
  <p className="text-body text-muted">tailwind + ds 토큰 연결 완료</p>
  <button className="mt-s3 rounded-pill bg-accent px-s4 py-s2 text-white">버튼</button>
</div>
```

## CI

- 워크플로우: `.github/workflows/client-ci.yml`
- 검증 항목: `pnpm lint`, `pnpm build`
- 트리거: `develop/main` 대상 PR, `develop` push

## Environment

`.env.example`를 복사해 로컬 환경값을 설정합니다.
