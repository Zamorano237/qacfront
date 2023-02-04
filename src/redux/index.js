/** @format */

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import productItemReducer from './productSlice';
import postItemReducer from './postSlice';
import cartProductReducer from './cartSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    productItem: productItemReducer,
    postItem: postItemReducer,
    cartProduct: cartProductReducer,
  },
});
