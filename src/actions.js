export const SET_QUERY = 'SET_QUERY';

export const setQuery = (query) => ({
  type: SET_QUERY,
  payload: query,
});

export const SET_RECIPE = 'SET_RECIPE';

export const setRecipe = (recipe) => ({
  type: SET_RECIPE,
  payload: recipe,
});
