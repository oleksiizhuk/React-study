import { combineReducers } from 'redux';
import locale from './locale/reducers';
import joke from './joke/reducers';
import user from './user/reducers';

const rootReducer = combineReducers({
  locale,
  joke,
  user
});

export default rootReducer;
