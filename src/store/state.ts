import {UIState} from './ui/state';
import {FolderState} from './folder/state';

export interface GlobalState {
  UI: UIState;
  FolderState: FolderState;
}
