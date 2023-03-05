import { createSlice } from "@reduxjs/toolkit";
import cartItems from  '../../cartItems'

const initialState = {
    cartItems: cartItems,
    amount: cartItems.length,
    total: 0,
    isLoading: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) =>{
            state.cartItems = [];
        },
        removeItem: (state, { payload }) =>{
            const itemId = payload.id;
            state.cartItems =  state.cartItems.filter((item) => item.id !== itemId)
        },
        increaseItem: (state, { payload }) =>{
            const itemId = payload.id;
            const cartItems = state.cartItems.find((item) => item.id === itemId)
            cartItems.amount = cartItems.amount + 1;
        },
        decreaseItem: (state, { payload }) =>{
            const itemId = payload.id;
            const cartItems = state.cartItems.find((item) => item.id === itemId)
            cartItems.amount = cartItems.amount - 1;
            if(cartItems.amount < 1){
                state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
            }
        },
        totalItem:(state) =>{

           let totalPrice = 0;
           let totalCount = 0; 

           state.cartItems.forEach((item) => {
               totalPrice += item.price * item.amount
               totalCount += item.amount
           })
        
          state.total = totalPrice;
          state.amount = totalCount;
        }
    }
})

// console.log(cartSlice);

export const { clearCart, removeItem, increaseItem, decreaseItem, totalItem, } = cartSlice.actions;

export default cartSlice.reducer