import { createSlice } from "@reduxjs/toolkit";
import { Product as ProductType} from "../types/HomeScreen";

const storedCart = localStorage.getItem('cart')
const initialState = storedCart ? JSON.parse(storedCart) : {cartItems: []}
import {updateCart} from "../utils/cartUtils"

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // NOTE: we don't need user, rating, numReviews or reviews
            // in the cart
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
    }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer