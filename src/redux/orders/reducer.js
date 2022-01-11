import { actionsTypes } from './actionTypes';

const initialState = [];

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.add:
      return [...state, action.payload.order];
    default:
      return state;
  }
};

export default ordersReducer;
