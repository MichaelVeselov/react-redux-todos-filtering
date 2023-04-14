export const selectActiveFilter = (state) => {
  const { filtersReducer } = state;
  return filtersReducer;
};
