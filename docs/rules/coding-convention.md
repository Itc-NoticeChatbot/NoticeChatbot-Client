# Coding Convention

## Component
- Interface naming: always suffix with `Props` (e.g. `ChatCardProps`, `NoticeItemProps`)
- Avoid meaningless `<div>`; use fragment `<>` at component root when possible
- Use self-closing when no children: `<Component />`
- Reusable UI components must keep business logic minimal
- Domain-specific components stay in feature/domain folders

## Folder Naming
- Always lowercase
- Prefer plural names
- kebab-case only (e.g. `chat-pages`, `notice-list`)

## Types
- Prefer `interface` over `type`
- Use `type` for union, tuple, literal type definitions

## Variables
- Never use `var`
- Declare in order: `const` -> `let`
- Use template literals instead of string concatenation
- Constants: UPPER_SNAKE_CASE
- Boolean variables must be prefixed with `is`

## Functions
- Name format: verb + noun
- Event handlers must be prefixed with `handle`
- Boolean-returning utility functions should be prefixed with `has`
- Shared utilities used in 2+ domains go to `utils/`
- Prefer arrow functions in React components/hooks

## Arrays & Destructuring
- Array copy with spread operator
- Prefer `forEach` / `map` over manual `for`
- Prefer destructuring assignment

## Style
- Use semantic HTML tags
- Wrapper root naming should be explicit (`container`, `wrapper`)
- Keep CSS class naming consistent with component intent

## React
- HOC prefix: `with`
- Context suffix: `Context`
- Import React types individually (`ReactNode`, `FC` 등)
- Avoid unnecessary `useMemo` / `useCallback`
