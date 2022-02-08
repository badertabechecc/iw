import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    addToCart: (state, { payload }) => {
      if (state[payload.id]) {
        state[payload.id].quantity++;
      } else {
        state[payload.id] = {
          id: payload.id,
          quantity: 1,
        };
      }
    },
    removeFromCart: (state, { payload }) => {
      if (state[payload.id]?.quantity === 1) {
        delete state[payload.id];
      }
      if (state[payload.id]?.quantity > 1) {
        state[payload.id].quantity--;
      }
    },
    clearCart: (state) => {
      return {};
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const selectCart = (state: any) => state.cart;
export default cartSlice.reducer;
