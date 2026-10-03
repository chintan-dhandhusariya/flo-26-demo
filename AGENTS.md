# AGENTS.md

Guidance for AI coding agents working in this repository.

## Stack

Vite + React 19 + TypeScript (strict). No backend — the app runs on a
static mock dataset.

## Commands

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server (default port 5173) |
| `npm run build`   | Type-check and build for production  |
| `npm run preview` | Preview the production build         |

## Layout

- `src/App.tsx` — root component; owns note state and sorting
- `src/components/NoteCard.tsx` — renders a single note
- `src/data/notes.ts` — mock dataset
- `src/types.ts` — shared types

## Conventions

- Strict TypeScript: no `any`, no non-null assertions (except the
  `getElementById` in `main.tsx`)
- Props are typed interfaces declared above their component
- Default exports for root/page components only

## Docs hygiene

`README.md` was last updated before the pin feature and the
`onDelete` → `onRemove` rename, and it still describes files that no
longer exist. When docs and code disagree, trust the code — and treat
updating the docs as part of the change, not a follow-up.
