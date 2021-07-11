import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading : false,
    singleOrder:'',
    error:false
}

const orderInfoSlice = createSlice({
    name : "single singleOrder",
    initialState,
    reducers:{
        fetchingSingleOrdersLoading:state=>{
            state.isLoading = true;
        },
        fetchingSingleOrdersSuccess : (state,{payload})=>{
            state.isLoading=false;
            state.singleOrder=payload;
            state.error=false;
        },
        fetchingSingleOrdersFailed : (state)=>{
            state.isLoading=false;
            state.error=true;
        }
    }
})

const {reducer,actions}= orderInfoSlice;
const { fetchingSingleOrdersFailed,fetchingSingleOrdersLoading,fetchingSingleOrdersSuccess } = actions;
export { fetchingSingleOrdersFailed,fetchingSingleOrdersLoading,fetchingSingleOrdersSuccess };
export default reducer;