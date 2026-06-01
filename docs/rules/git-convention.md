# Git Convention (Commit & PR Convention)

## Git Flow
- `main`: production-ready, always stable
- `develop`: integration branch; feature branches branch off and merge back here
- `feature`: branch from `develop` -> open PR back to `develop` when done
- Release: merge `develop` into `main` when stable

## Branch Naming
- Format: `feat/description/#issue-number`
- Examples:
  - `feat/chat-input/#43`
  - `fix/search-validation/#12`

## Commit Message
- Format: `type: description`
- Examples:
  - `feat: 채팅 입력 폼 추가`
  - `fix: 공지 리스트 정렬 버그 수정`
  - `chore: 의존성 업데이트`
- Keep commits small and atomic

## PR Title
- Format: `[Type] description` or `Type(scope): description`
- Examples:
  - `[Feat] 공지 카드 컴포넌트 추가`
  - `Feat(client): 검색 화면 상태관리 분리`

## PR Rules
- Keep PRs small; write documentation thoroughly
- Describe: problem -> approach considered -> result
- Submit early and iterate with team feedback
- Share unknown risks/issues quickly

## Labels
| Label | When to use |
|---|---|
| `chore` | dependency/tooling changes |
| `docs` | documentation only |
| `feature` | new feature development |
| `fix` | bug fixes |
| `refactor` | refactoring (no behavior change) |
| `style` | UI/design style changes |
| `test` | test code |
