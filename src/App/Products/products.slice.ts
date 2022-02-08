import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {},
  reducers: {
    addProducts: (state, { payload }) => {
      return payload.products;
    },
  },
});

export const { addProducts } = productsSlice.actions;
export const selectProducts = (state: any) => state.products;
export default productsSlice.reducer;
