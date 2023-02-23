import {combineReducers} from 'redux';
import {legacy_createStore as createStore} from 'redux';
import {persistStore} from 'redux-persist';
import {uiReducer} from './ui/reducer';
import {folderReducer} from './folder/reducer';

export const rootReducer = combineReducers({
  ui: uiReducer,
  folder: folderReducer,
});

const store = createStore(rootReducer);
const persistor = persistStore(store);

export {store, persistor};
