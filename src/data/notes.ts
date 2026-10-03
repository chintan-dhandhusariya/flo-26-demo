import type { Note } from '../types'

/**
 * Mock dataset for QuickNote.
 * Static for now — a future change may load notes from an API.
 */
export const notes: Note[] = [
  {
    id: 'n1',
    title: 'Welcome to QuickNote',
    body: 'This is your first note. Edit it to make it yours.',
    pinned: true,
    createdAt: '2026-08-30',
  },
  {
    id: 'n2',
    title: 'Groceries',
    body: 'Milk, eggs, sourdough, spinach, coffee beans.',
    pinned: false,
    createdAt: '2026-08-31',
  },
  {
    id: 'n3',
    title: 'Book ideas',
    body: 'Chapter outline: decay, memory, repair. Working title: The Maintenance Age.',
    pinned: false,
    createdAt: '2026-09-01',
  },
  {
    id: 'n4',
    title: 'Standing agenda',
    body: '1) blockers 2) metrics 3) one improvement. Keep it to 15 minutes.',
    pinned: true,
    createdAt: '2026-09-02',
  },
]
