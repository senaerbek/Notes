export interface NoteState {
  notes: Note[];
}

export interface Note {
  id: number;
  folderId: number;
  name: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
