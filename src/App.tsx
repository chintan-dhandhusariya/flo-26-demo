import { useState } from 'react'
import notes from './data/notes.json'
import type { Note } from './types'
import NoteCard from './components/NoteCard'
import EditorPanel from './components/EditorPanel'

export default function App() {
  const [items, setItems] = useState<Note[]>(notes as Note[])

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((note) => note.id !== id))
  }

  return (
    <main className="app">
      <h1>QuickNote</h1>
      <p>Your notes, right here.</p>
      <EditorPanel />
      <ul className="note-list">
        {items.map((note) => (
          <li key={note.id}>
            <NoteCard note={note} editable onDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </main>
  )
}
