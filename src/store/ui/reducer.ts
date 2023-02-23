import {UIState} from './state';
import {createReducer} from 'deox';
import {changeBusyAction} from './action';
import {PersistConfig} from 'redux-persist/es/types';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

const initialState: UIState = {
  busy: false,
  busyCount: 0,
};

export const uiReducerRaw = createReducer(initialState, handle => [
  handle(changeBusyAction, (state, action) => {
    let busyCount = state.busyCount + (action.payload.busy ? 1 : -1);
    if (busyCount < 0) {
      busyCount = 0;
    }

    return {
      ...state,
      busyCount,
      busy: busyCount > 0,
    };
  }),
]);

const persistConfig: PersistConfig<any> = {
  key: 'ui',
  storage: AsyncStorage,
};

export const uiReducer = persistReducer(persistConfig, uiReducerRaw);
