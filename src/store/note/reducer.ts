import {NoteState} from './state';
import {createReducer} from 'deox';
import {addNoteAction} from './action';
import {PersistConfig} from 'redux-persist/es/types';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

const initialState: NoteState = {
  notes: [],
};

export const noteReducerRaw = createReducer(initialState, handle => [
  handle(addNoteAction, (state, action) => {
    return {
      ...state,
      notes: action.payload.notes,
    };
  }),
]);

const persistConfig: PersistConfig<any> = {
  key: 'notes',
  storage: AsyncStorage,
};

export const noteReducer = persistReducer(persistConfig, noteReducerRaw);
