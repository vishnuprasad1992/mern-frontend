import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("user")? JSON.parse(localStorage.getItem("user"))  : {
    isLoading :false,
    loginMessage : '',
    loginError:''
}

const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        loginUserLoading : state =>{
            state.isLoading = true;
        },
        loginUserSuccess :(state,{payload})=>{
            state.isLoading = false;
            state.loginMessage = payload;
            state.loginError = ''
        },
        loginUserError :(state,{payload})=>{
            state.isLoading = false;
            state.loginMessage = '';
            state.loginError = payload
        },
        logout :(state)=>{
            state.isLoading = false;
            state.loginMessage = '';
            state.loginError = '';
        }
    }
})


const { reducer,actions } = loginSlice;

const { loginUserLoading,loginUserSuccess,loginUserError,logout } = actions;

export { loginUserLoading,loginUserSuccess,loginUserError,logout };

export default reducer