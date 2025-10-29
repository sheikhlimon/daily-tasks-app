# AGENTS.md - Ground Truth for Commands, Style, and Structure

This file defines the standards and conventions for this project. Treat it as authoritative for consistency.

## Project Overview

- **Tech Stack**: React 19, TypeScript, Vite, Vitest, ESLint, Prettier, Husky
- **Methodology**: Test-Driven Development (TDD) - write tests first, then implement features

## File Structure

- `src/`: Source code
  - `*.tsx`: React components
  - `*.ts`: Types and utilities
  - `*.test.tsx`: Tests (colocated with components where possible)
- `public/`: Static assets
- Root files: Configs for Vite, ESLint, etc.

## Coding Style

- Use TypeScript for all new code
- Prefer functional components with hooks
- Props interfaces: Define at top of component file
- State: Use `React.useState` for local state
- Event handlers: Prefix with `on` (e.g., `onAddTask`)
- Accessibility: Use semantic HTML, ARIA labels where needed

## Testing

- Use Vitest with React Testing Library
- Test user interactions, not implementation details
- Naming: `should [describe behavior]`
- Run tests: `npm run test`
- Test coverage: Aim for high coverage on user-facing features

## Commands

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run test`: Run tests
- `npm run preview`: Preview production build

## Git

- Use conventional commits (e.g., `feat: add delete task`)
- Pre-commit hooks via Husky: Lint and format code

## Conventions

- Component exports: Default export
- Imports: Group by external libs, then internal
- Error handling: Use try/catch where async operations occur
- TODOs: Use comments like `// TODO: implement feature`

If a new pattern emerges or command is used repeatedly, document it here.
