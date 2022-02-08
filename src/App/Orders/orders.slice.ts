import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: [],
  reducers: {
    addOrder: (state, { payload }) => {
      state.push(payload.order);
    },
  },
});

export const { addOrder } = ordersSlice.actions;
export const selectOrders = (state: any) => state.orders;
export default ordersSlice.reducer;
