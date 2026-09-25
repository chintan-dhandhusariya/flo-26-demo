import type { Note } from '../types'

interface NoteCardProps {
  note: Note
  /** Called with the note id when the user removes a note. */
  onRemove: (id: string) => void
}

export default function NoteCard({ note, onRemove }: NoteCardProps) {
  return (
    <article className="note-card">
      <h3>
        {note.title}
        {note.pinned && <span className="badge">pinned</span>}
      </h3>
      <p>{note.body}</p>
      <button type="button" onClick={() => onRemove(note.id)}>
        Remove
      </button>
    </article>
  )
}
