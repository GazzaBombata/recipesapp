import { configureStore } from '@reduxjs/toolkit';

const initialState = { 
  query: '',
  recipe: ' ',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_QUERY':
      return { ...state, query: action.payload };
    case 'SET_RECIPE':
      return { ...state, recipe: action.payload };
    default:
      return state;
  }
};

const store = configureStore({ reducer });

export default store;
