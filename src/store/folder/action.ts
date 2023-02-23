import {createAction} from 'deox';
import {Folder, FolderState} from './state';
export const addFolderAction = createAction(
  'ADD_FOLDER_ACTION',
  resolve => (folder: Folder[]) => resolve({folder}),
);
