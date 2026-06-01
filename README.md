# NoticeChatbot-Client

기능별(Feature-based) 아키텍처 기반 클라이언트입니다.

## Run

```bash
pnpm install
pnpm dev
```

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

## CI

- 워크플로우: `.github/workflows/client-ci.yml`
- 검증 항목: `pnpm lint`, `pnpm build`
- 트리거: `develop/main` 대상 PR, `develop` push

## Environment

`.env.example`를 복사해 로컬 환경값을 설정합니다.
