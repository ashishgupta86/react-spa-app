import {
  combineReducers,
  createStore,
  applyMiddleware
} from 'redux';

import thunk from 'redux-thunk';

import user from '../reducers/user';
import common from '../reducers/common';

const rootReducer = combineReducers({
  user,
  common
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
