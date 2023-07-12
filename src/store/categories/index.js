import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    // loading: false,
    // error: null,
    activeCategory: '',
  },
  reducers: {
    setCategory: (state, action) => {
      return { ...state, activeCategory: action.payload };
    },
    setInitialCategories: (state, action) => {
      state.categories = action.payload;
    }
  }
});


export const getCategories = () => async (dispatch, getState) => {
  // This is where we hit our API to get categories from DB
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
  dispatch(setInitialCategories(response.data.results));
}


export const { setCategory, setInitialCategories } = categorySlice.actions;
export default categorySlice.reducer;









