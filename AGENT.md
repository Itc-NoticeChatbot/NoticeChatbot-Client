# NoticeChatbot Client Guide

## Project Summary
- One-line definition: NoticeChatbot Client는 학교 공지 탐색과 챗봇 대화를 빠르게 제공하는 웹 프론트엔드입니다.
- Problems to solve:
  - 사용자가 공지 사이트를 직접 돌아다녀야 하는 탐색 비용
  - 키워드 검색 중심 UX로 인한 질의 난이도
  - 공지 확인/북마크/대화 흐름의 단절
- Core values:
  - 자연어 기반 탐색 경험
  - 빠른 응답과 명확한 정보 구조
  - 모바일/데스크톱 모두에서 일관된 사용성
- Target users: 인하공업전문대학 학생 및 교직원

## Tech Stack (Client)
- Language: TypeScript
- UI Library: React
- Build Tool: Vite
- Runtime/Package Manager: Node.js + pnpm
- Module System: ESM ("type": "module")
- Linting: ESLint

## Coding Convention
- Follow the coding convention in `docs/rules/coding-convention.md`
- @docs/rules/coding-convention.md

## Git Convention
- Follow the Git convention(commit & PR) in `docs/rules/git-convention.md`
- @docs/rules/git-convention.md

## Work Policy
- 작업 시작 전 변경 범위와 영향 파일을 먼저 공유한다.
- 작업 완료 후 `pnpm build` 기준으로 결과를 확인한다.
- 이슈 단위로 작은 커밋을 유지하고 PR 설명을 구체적으로 작성한다.

## Local Branch Review
- Branch review skill: `skills/branch-review/SKILL.md`
- 리뷰 기준 브랜치: `origin/develop`
