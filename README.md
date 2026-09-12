# QuickNote

QuickNote is a lightweight note-taking app for capturing short thoughts,
lists, and meeting notes. It runs entirely in the browser with a local
mock dataset — no backend required.

![build](https://ci.quicknote.dev/badge.svg?repo=quicknote)

## Requirements

- Node.js 14+
- npm 6+

## Install

```bash
npm install quicknote
npm start
```

The dev server runs at `http://localhost:3000`.

## Scripts

| Command       | Description                 |
| ------------- | --------------------------- |
| `npm start`   | Start the dev server        |
| `npm run build` | Type-check and build for production |
| `npm test`    | Run the unit test suite     |

## Features

- Create, edit, and delete notes
- Markdown editor with live preview
- Tag notes and filter by tag
- Notes persist locally between sessions

## Project structure

```
quicknote/
├─ src/
│  ├─ components/
│  │  ├─ NoteCard.jsx
│  │  └─ EditorPanel.jsx
│  ├─ data/
│  │  └─ notes.json
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ types.ts
├─ index.html
└─ package.json
```

## Components

### `NoteCard`

Renders a single note.

| Prop       | Type                  | Description                          |
| ---------- | --------------------- | ------------------------------------ |
| `note`     | `Note`                | The note to render.                  |
| `editable` | `boolean`             | Enables inline editing (prototype).  |
| `onDelete` | `(id: string) => void` | Called when the user deletes a note. |

### `EditorPanel`

Renders the markdown editing surface used by the note view. Supports
live preview of headings, lists, and code blocks.

## Data

Mock notes live in `src/data/notes.json`. Each note has the following
fields:

| Field       | Type   | Description            |
| ----------- | ------ | ---------------------- |
| `id`        | string | Unique note id         |
| `title`     | string | Note heading           |
| `body`      | string | Note content           |
| `createdAt` | string | ISO date string        |

## License

MIT
