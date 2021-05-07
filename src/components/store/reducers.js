import { combineReducers } from 'redux';
import locale from './locale/reducers';
import joke from './joke/reducers';

const rootReducer = combineReducers({
  locale,
  joke
});

export default rootReducer;
