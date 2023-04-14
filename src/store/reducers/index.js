import { combineReducers } from 'redux';

import { todosReducer } from './todosReducer';
import { filtersReducer } from './filtersReducer';

export const rootReducer = combineReducers({
  todosReducer,
  filtersReducer,
});
