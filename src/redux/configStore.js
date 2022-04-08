import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import messageReducer from './reducers/messages';

const reducer = combineReducers({
  messageReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
