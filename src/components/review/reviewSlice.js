import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isLoading:false,
    review:[],
    error:false,
}

const reviewSlice = createSlice({
    name:"Add reviews",
    initialState,
    reducers:{
        addReviewInitialize : state =>{
            state.isLoading = true;
        },
        addReviewSuccess : (state,action) =>{
            state.isLoading = false;
            state.review = action.payload;
            state.error = false;
        },
        addReviewFailed : (state) =>{
            state.isLoading = false;
            state.error= true;
        },
    }
})


const { reducer,actions }= reviewSlice;

const { addReviewFailed,addReviewInitialize,addReviewSuccess } = actions;

export { addReviewFailed,addReviewInitialize,addReviewSuccess };

export default reducer