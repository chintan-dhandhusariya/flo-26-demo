import notes from './data/notes.json'
import type { Note } from './types'

export default function App() {
  const sorted = [...(notes as Note[])].sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt),
  )

  return (
    <main className="app">
      <h1>QuickNote</h1>
      <p>Your notes, right here.</p>
      <ul className="note-list">
        {sorted.map((note) => (
          <li key={note.id} className="note-card">
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <time dateTime={note.createdAt}>{note.createdAt}</time>
          </li>
        ))}
      </ul>
    </main>
  )
}
