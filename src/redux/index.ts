import { combineReducers, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension/';
import LojaReducer from './reducers/LojaReducer';
import StatsReducer from './reducers/StatsReducer';

const reducers = combineReducers({
  LojaReducer,
  StatsReducer,
});

const store = createStore(reducers, composeWithDevTools());

export default store;
