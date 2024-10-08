import { createSlice } from "@reduxjs/toolkit";
import { Product as ProductType} from "../types/Types";

const storedCart = localStorage.getItem('cart')
const initialState = storedCart ? JSON.parse(storedCart) : {cartItems: []}
import {updateCart} from "../utils/cartUtils"

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { user, rating, numReviews, reviews, ...item } = action.payload;
      
            const existItem = state.cartItems.find((x: ProductType) => x._id === item._id);
      
            if (existItem) {
              state.cartItems = state.cartItems.map((x:ProductType) =>
                x._id === existItem._id ? item : x
              );
            } else {
              state.cartItems = [...state.cartItems, item];
            }
      
            return updateCart(state);
        },
        removeFromCart: (state, action) => {
          state.cartItems = state.cartItems.filter((item: ProductType) => item._id !== action.payload)
          return updateCart(state)
        },
        saveShippingAddress: (state, action) => {
          state.shippingAddress = action.payload;
          localStorage.setItem('cart', JSON.stringify(state));
        },
        savePaymentMethod: (state, action) => {
          state.paymentMethod = action.payload;
          localStorage.setItem('cart', JSON.stringify(state));
        },
        clearCartItems: (state) => {
          state.cartItems = [];
          localStorage.setItem('cart', JSON.stringify(state));
        },
        // NOTE: here we need to reset state for when a user logs out so the next
        // user doesn't inherit the previous users cart and shipping
        resetCart: (state) => (state = initialState),
    }
})

export const {addToCart, removeFromCart,saveShippingAddress,savePaymentMethod,clearCartItems,resetCart} = cartSlice.actions;
export default cartSlice.reducer