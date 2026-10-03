import { useState } from 'react'
import { notes } from './data/notes'
import type { Note } from './types'
import NoteCard from './components/NoteCard'

export default function App() {
  const [items, setItems] = useState<Note[]>(notes)

  const handleRemove = (id: string) => {
    setItems((prev) => prev.filter((note) => note.id !== id))
  }

  const sorted = [...items].sort((a, b) => {
    if (a.pinned !== b.pinned) return a.pinned ? -1 : 1
    return b.createdAt.localeCompare(a.createdAt)
  })

  return (
    <main className="app">
      <h1>QuickNote</h1>
      <p>Your notes, right here.</p>
      <ul className="note-list">
        {sorted.map((note) => (
          <li key={note.id}>
            <NoteCard note={note} onRemove={handleRemove} />
          </li>
        ))}
      </ul>
    </main>
  )
}
