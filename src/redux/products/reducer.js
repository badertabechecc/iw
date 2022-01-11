import { actionsTypes } from './actionTypes';

const initialState = [];

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.add:
      return [...state, action.payload.item];
    case actionsTypes.remove:
      return state.filter((item) => item.Id !== action.payload.id);
    default:
      return state;
  }
};

export default productsReducer;
