import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducer from './reducer';

const reducers = combineReducers({
  store: reducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
}



export default store();







