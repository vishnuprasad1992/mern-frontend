import { createSlice } from "@reduxjs/toolkit";

const cartItems = localStorage.getItem('cart-items') ? JSON.parse(localStorage.getItem('cart-items')) : []

const initialState = {
    cartItems
}
const cartSlice = createSlice({
    name: "cartItems",
    initialState,
    reducers: {
        addingToCart: (state, { payload }) => {
            const existingItem = state.cartItems.find(item => item._id === payload._id);
            if (existingItem) {
                state.cartItems = state.cartItems.map(cartItem => cartItem._id === payload._id ? payload : cartItem)
            } else {
                state.cartItems = [...state.cartItems, payload];
            }
        },
        deleteCartItem: (state, { payload }) => {
            state.cartItems = state.cartItems.filter(cartItem => cartItem._id !== payload._id )
        },
        resetCart: (state) => {
            state.cartItems = []
        }

    }
})

const { reducer, actions } = cartSlice;
const { addingToCart,deleteCartItem,resetCart } = actions;
export { addingToCart,deleteCartItem,resetCart }
export default reducer