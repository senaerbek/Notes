import {FolderState} from './state';
import {createReducer} from 'deox';
import {addFolderAction} from './action';
import {PersistConfig} from 'redux-persist/es/types';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

const initialState: FolderState = {
  folder: [],
};

export const folderReducerRaw = createReducer(initialState, handle => [
  handle(addFolderAction, (state, action) => {
    return {
      ...state,
      folder: action.payload.folder,
    };
  }),
]);

const persistConfig: PersistConfig<any> = {
  key: 'folders',
  storage: AsyncStorage,
};

export const folderReducer = persistReducer(persistConfig, folderReducerRaw);
