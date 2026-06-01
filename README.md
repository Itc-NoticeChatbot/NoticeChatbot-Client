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

## Environment

`.env.example`를 복사해 로컬 환경값을 설정합니다.
