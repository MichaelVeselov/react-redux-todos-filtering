import { SET_FILTER } from '../constants/filtersConstants';

const initialState = 'all';

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.filter;
    }
    default: {
      return state;
    }
  }
};
