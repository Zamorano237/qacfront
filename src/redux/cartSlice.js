/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
const initialState = {
  cartProductItem: [],
  alert: 'You Cart Empty',
  msg: '',
  loading: true,
};

export const cartProduct = createSlice({
  name: 'cartProduct',
  initialState,
  reducers: {
    setCartProduct: (state, action) => {
      state.loading = true;
      state.cartProductItem = [
        ...state.cartProductItem,
        { ...action.payload, total: action.payload.qty * action.payload.price },
      ];
      state.msg = 'Successfully product added !!';
      state.alert = true;
      state.loading = false;
      toast.success("Le produit vient d'être ajouté au panier", {
        position: 'top-center',
        autoClose: 2000,
      });
    },
    incrementQtyProduct: (state, action) => {
      const index = state.cartProductItem.findIndex(
        (el) => el.id === action.payload
      );

      state.cartProductItem[index].qty += 1;
      state.cartProductItem[index].total =
        state.cartProductItem[index].qty * state.cartProductItem[index].price;
      toast.success("Le quantité vient d'être augmentée", {
        position: 'top-center',
      });
    },
    decrementQtyProduct: (state, action) => {
      const index = state.cartProductItem.findIndex(
        (el) => el.id === action.payload
      );

      if (state.cartProductItem[index].qty > 1) {
        state.cartProductItem[index].qty -= 1;
        state.cartProductItem[index].total =
          state.cartProductItem[index].qty * state.cartProductItem[index].price;
      }
      toast.error("Le quantité vient d'être dimuniée", {
        position: 'top-center',
      });
    },
    deleteCartProduct: (state, action) => {
      const index = state.cartProductItem.findIndex(
        (el) => el.id === action.payload
      );
      state.cartProductItem.splice(index, 1);
      toast.error("Le produit vient d'être retiré du panier", {
        position: 'top-center',
      });
    },
  },
});

export const {
  setCartProduct,
  incrementQtyProduct,
  decrementQtyProduct,
  deleteCartProduct,
} = cartProduct.actions;

export default cartProduct.reducer;
