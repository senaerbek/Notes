import {combineReducers} from 'redux';
import {legacy_createStore as createStore} from 'redux';
import {persistStore} from 'redux-persist';
import {folderReducer} from './folder/reducer';
import {noteReducer} from './note/reducer';

export const rootReducer = combineReducers({
  folder: folderReducer,
  note: noteReducer,
});

const store = createStore(rootReducer);
const persistor = persistStore(store);

export {store, persistor};
