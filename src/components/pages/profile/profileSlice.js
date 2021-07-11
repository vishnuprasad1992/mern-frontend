import {createSlice} from "@reduxjs/toolkit";

const updateSlice = createSlice({
    name:"update user",
    initialState:{
        isLoading:false,
        updateMessage:'',
        error:''
    },
    reducers:{
        updateExistingUserLoading : state =>{
            state.isLoading = true;
        },
        updateExistingUserSuccess : (state,{payload}) =>{
            state.isLoading = false;
            state.successMessage=payload;
            state.error= ''
        },
        updateExistingUserFailed : (state,{payload}) =>{
            state.isLoading = false;
            state.successMessage='';
            state.error=payload;
        }
    }
})


const { reducer,actions}= updateSlice;

const { updateExistingUserLoading,updateExistingUserSuccess,updateExistingUserFailed } = actions;

export  { updateExistingUserLoading,updateExistingUserSuccess,updateExistingUserFailed };
export default reducer;