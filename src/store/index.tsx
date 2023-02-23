import {combineReducers} from 'redux';
import {legacy_createStore as createStore} from 'redux';
import {persistStore} from 'redux-persist';
import {uiReducer} from './ui/reducer';
import {folderReducer} from './folder/reducer';
import {noteReducer} from './note/reducer';

export const rootReducer = combineReducers({
  ui: uiReducer,
  folder: folderReducer,
  note: noteReducer,
});

const store = createStore(rootReducer);
const persistor = persistStore(store);

export {store, persistor};
