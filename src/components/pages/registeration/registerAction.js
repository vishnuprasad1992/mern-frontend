import  { registerNewUserLoading,
    registerNewUserSuccess,
    registerNewUserFailed } from "./registerSlice";
import { createUser } from "../../../api/userApi";


export const registerNewUser = (data) => async (dispatch) =>{
    try {
        dispatch(registerNewUserLoading());

        const result = await createUser(data)
        console.log(result)
        if(result.status==="success"){
            dispatch(registerNewUserSuccess(result))
        }else
        {
            dispatch(registerNewUserFailed(result.message));            
        }
    } catch (error) {
        if(error.message === "Request failed with status code 401"){
            dispatch(registerNewUserFailed("User allready exist"))            
        }else{
        dispatch(registerNewUserFailed(error.message));
        }
    }
}