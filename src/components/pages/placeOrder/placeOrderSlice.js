import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading:false,
    success:false,
    error:false
}

const placeOrderSlice = createSlice({
    name : "place order",
    initialState,
    reducers:{
        orderPlaceInitialize: state =>{
            state.isLoading = true;
        },
        orderPlaceSuccess: state =>{
            state.isLoading = false;
            state.success= true;
            state.error = false
        },
        orderPlaceError: state =>{
            state.isLoading = false;
            state.success= false;
            state.error = true
        }
    }
})


const {reducer,actions} = placeOrderSlice;

const { orderPlaceInitialize,orderPlaceSuccess,orderPlaceError } =actions;

export { orderPlaceInitialize,orderPlaceSuccess,orderPlaceError };
export default reducer;