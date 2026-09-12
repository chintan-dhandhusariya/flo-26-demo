import type { Note } from '../types'

interface NoteCardProps {
  note: Note
  /** Enables inline editing surface (prototype). */
  editable?: boolean
  /** Called with the note id when the user deletes a note. */
  onDelete: (id: string) => void
}

export default function NoteCard({ note, editable = false, onDelete }: NoteCardProps) {
  return (
    <article className="note-card">
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      {editable && <span className="badge">editable</span>}
      <button type="button" onClick={() => onDelete(note.id)}>
        Delete
      </button>
    </article>
  )
}
