import { loginUser } from "../../../api/userApi";
import { loginUserLoading,loginUserSuccess,loginUserError,logout } from "./loginSlice";



export const loginUserAction = (loginData) => async(dispatch,getState) =>{
    try {
        dispatch(loginUserLoading());
        const result = await loginUser(loginData)
        if(result.status==="success"){
            dispatch(loginUserSuccess(result.loginDetails))
            localStorage.setItem("user",JSON.stringify(getState().login))
        }else{
            dispatch(loginUserError(result.message))
        }
    } catch (error) {
        if(error.message === "Request failed with status code 401"){
            dispatch(loginUserError("email or password is incorrect"))            
        }else{
            dispatch(loginUserError(error.message))
        }
    }
}

export const logoutUser = ()=> dispatch =>{
    localStorage.removeItem("user");
    localStorage.removeItem("cart-items");
    dispatch(logout());
    window.location.href = "/login"
}