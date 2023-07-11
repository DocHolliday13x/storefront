import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducer from './reducer';
import cartReducer from '../Components/Categories/cartReducer';

const reducers = combineReducers({
  store: reducer,
  cart: cartReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
}



export default store();







