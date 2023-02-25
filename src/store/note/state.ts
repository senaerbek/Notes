export interface NoteState {
  notes: Note[];
}

export interface Note {
  id: number;
  folderId: number;
  title: string;
  content: string;
  label: string;
  backgroundColor: string;
  createdAt: Date;
  updatedAt: Date;
}
