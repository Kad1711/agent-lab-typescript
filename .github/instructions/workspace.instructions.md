---
description: Core workspace instructions for the Soc Ops TypeScript repo.
---

# Workspace Instructions (Compact)

## Mandatory Development Checklist
- [ ] `npm install` (dependencies)
- [ ] `npm run lint` (static checks)
- [ ] `npm run test` (unit + integration)
- [ ] `npm run build` (production build)

## Setup
1. Clone repository and open in VS Code.
2. Run `npm install`.
3. Run `npm run dev` and open `http://localhost:5173`.

## Project structure
- `src/App.tsx`: root component
- `src/components`: UI components for bingo game
- `src/hooks/useBingoGame.ts`: game logic hook
- `src/utils/bingoLogic.ts`: bingo rules and utilities
- `workshop/`: lab exercise guidance

## How to contribute
1. Create feature branch from `main`.
2. Run the checklist above before committing.
3. Keep PRs focused on one goal and include tests.
4. Use `npm run lint:fix` to solve formatting issues.

## Copilot behavior guidance
- Prefer Tailwind v4 idioms from `.github/instructions/tailwind-4.instructions.md`.
- Add distinct frontend style, avoid purple-gradient cliches per `.github/instructions/frontend-design.instructions.md`.
- Keep modifications minimal in stable game logic and tests; prioritize correctness.

## Design guide (for Copilot)
- Theme: Retro Terminal (emerald, cyan, black) + strong clarity/contrast.
- UI should feel like a modern game dashboard with neon focus ring, soft glow, and layered cards.
- Support both Bingo board mode and Scavenger Hunt mode (checklist + progress meter).
- Encourage micro-interactions: button hover lifts, feedback states, win animations.
- Keep layout responsive: max width ~ 70ch, centered.
- Test state flows in Start -> Game -> Winning modal.
