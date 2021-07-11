import {createSlice} from "@reduxjs/toolkit";

const registerSlice = createSlice({
    name:"register",
    initialState:{
        isLoading:false,
        successMessage:'',
        error:''
    },
    reducers:{
        registerNewUserLoading : state =>{
            state.isLoading = true;
        },
        registerNewUserSuccess : (state,{payload}) =>{
            state.isLoading = false;
            state.successMessage=payload;
            state.error= ''
        },
        registerNewUserFailed : (state,{payload}) =>{
            state.isLoading = false;
            state.successMessage='';
            state.error=payload;
        }
    }
})


const { reducer,actions}= registerSlice;

const { registerNewUserLoading,registerNewUserSuccess,registerNewUserFailed } = actions;

export  { registerNewUserLoading,registerNewUserSuccess,registerNewUserFailed };
export default reducer;