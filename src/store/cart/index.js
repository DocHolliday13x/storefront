import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    addToCart: (state, action) => [...state, action.payload],
    removeFromCart: (state, action) => state.filter(product => product.name !== action.payload.name)
  }
});



export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;



