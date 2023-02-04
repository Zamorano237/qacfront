/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postItem: [],
  postLoading: true,
};

export const postSlice = createSlice({
  name: 'postItem',
  initialState,
  reducers: {
    setPostItem: (state, action) => {
      state.postLoading = true;
      state.postItem = action.payload;
      state.postLoading = false;
    },
  },
});

export const { setPostItem } = postSlice.actions;

export default postSlice.reducer;
