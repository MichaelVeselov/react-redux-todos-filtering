import { SET_FILTER } from '../constants/filtersConstants';

export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter,
});
