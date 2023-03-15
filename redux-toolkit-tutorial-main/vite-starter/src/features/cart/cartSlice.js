import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import cartItems from  '../../cartItems'

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
    cartItems: cartItems,
    amount: cartItems.length,
    total: 0,
    isLoading: true,
}

// ** basic setup of fetching API using fetch() 
// export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
//     return fetch(url).then((response) => response.json()).catch((error) => console.log(error))
// });
//**  fetching API using AXIOS */
export const getCartItems = createAsyncThunk('cart/getCartItems', async(_,thunkAPI) => {
    try {
        // console.log(thunkAPI.getState());
        const response = await axios(url);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue('There was an error...');
    }

});


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
    },
    extraReducers: (builder) => {
        builder.addCase(getCartItems.pending, (state) => {
                    state.isLoading = true;
                })
                .addCase(getCartItems.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.cartItems = action.payload;
                }, )
                .addCase(getCartItems.rejected, (state, action) => {
                    state.isLoading = false;
                },)
    },
    // extraReducers: {
    //     [getCartItems.pending]: (state) => {
    //         state.isLoading = true;
    //     },
    //     [getCartItems.fulfilled]: (state, action) => {
    //         state.isLoading = false;
    //         state.cartItems = action.payload;
    //     },
    //     [getCartItems.rejected]: (state, action) => {
    //         state.isLoading = false;
    //     },
    // }
})

// console.log(cartSlice);

export const { clearCart, removeItem, increaseItem, decreaseItem, totalItem, } = cartSlice.actions;

export default cartSlice.reducer