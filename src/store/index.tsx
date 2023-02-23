import {combineReducers} from 'redux';
import {legacy_createStore as createStore} from 'redux';
import {persistStore} from 'redux-persist';
import {uiReducer} from './ui/reducer';

export const rootReducer = combineReducers({
  ui: uiReducer,
});

const store = createStore(rootReducer);
const persistor = persistStore(store);

export {store, persistor};
