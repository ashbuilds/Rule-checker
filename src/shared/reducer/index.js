import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import flow from './flow';

export default combineReducers({
  routing: routerReducer,
  flow,
});
