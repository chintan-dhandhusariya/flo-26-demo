---
name: Stale Docs Detector
description: Detect stale docs and missing docs for components, utils, hooks, and other code. Use when README may be outdated or exported code lacks .md files or TSDoc comments.
---

# Stale Docs Detector

Source of truth is code. When docs and code disagree, trust the code and update the docs as part of the change.

## Workflow

1. Read repo guidance first:
   - `AGENTS.md` — especially Docs hygiene, Layout, Commands, Conventions.
   - `package.json` — actual `scripts` (`dev`, `build`, `preview` in this repo).
   - `src/types.ts`, `src/App.tsx`, `src/components/NoteCard.tsx`, `src/data/notes.ts`, `src/main.tsx`.

2. Audit each doc claim against code:
   - **Scripts/commands:** every `npm ...` in docs must exist in `package.json`. Note correct dev server port (`5173` via Vite, not `3000`).
   - **Project structure:** every path must exist on disk. Watch for `.jsx` vs `.tsx`, `notes.json` vs `notes.ts`, removed components (e.g. `EditorPanel`).
   - **Component props:** compare prop tables to the `*Props` interface above the component. Watch renames (e.g. `onDelete` → `onRemove`) and removed props (e.g. `editable` prototype).
   - **Data shapes:** compare field tables to `src/types.ts`. Watch added fields (e.g. `Note.pinned: boolean`).
   - **Features:** every claimed feature (edit, markdown preview, tags, persistence, pin/sort) must have implementing code in `src/`. Remove or correct unimplemented claims.

3. Find undocumented code in `src/`:
   - List exported components (`src/App.tsx`, `src/components/*.tsx`), hooks (`use*` in `src/hooks/`, `src/utils/`, or colocated), utils (`src/utils/`, `src/lib/`), plus `src/types.ts` and `src/data/*`.
   - A component is undocumented if it has no colocated `<Name>.md` and no TSDoc (`/** ... */`) on the component or its `*Props` fields.
   - A util/hook/type/data export is undocumented if it has no leading `/** ... */` covering purpose, params/props, return, and example where useful.

4. Fix stale docs in place and add missing docs:
   - Preserve existing doc style and structure; only correct what code disproves.
   - Update prop types/signatures exactly as declared in code.
   - Update file trees, import paths, and data file extensions to match disk.
   - Do not document Conventions violations as features (strict TS, typed props interfaces, default exports for root only).
   - For undocumented components: create colocated `<Name>.md` (e.g. `src/components/NoteCard.md` for `NoteCard.tsx`) with purpose, props table from the `*Props` interface, behavior/edge cases, and a short usage snippet.
   - For undocumented utils, hooks, types, data, and other non-component exports: add in-place TSDoc `/** ... */` comments (file overview + each export, `@param`, `@returns`, `@example` where useful). Do not use `any`, do not change runtime code.
   - Do not create `.md` files for utils/hooks unless the export surface is large enough that inline TSDoc becomes unreadable; prefer inline comments.

5. Verify:
   - Run `npm run build` to confirm code still type-checks after any code touch.
   - Re-read the edited doc section to confirm no new stale references were introduced.
