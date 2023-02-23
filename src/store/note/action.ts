import {createAction} from 'deox';
import {Note} from './state';

export const addNoteAction = createAction(
  'ADD_NOTE_ACTION',
  resolve => (notes: Note[]) => resolve({notes}),
);
