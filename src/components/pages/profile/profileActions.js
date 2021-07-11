import { updateExistingUserLoading, updateExistingUserSuccess, updateExistingUserFailed } from "./profileSlice";
import { updateUser } from "../../../api/userApi";


export const updateExistingUser = (data) => async (dispatch) => {
    try {
        dispatch(updateExistingUserLoading());

        const result = await updateUser(data)
        console.log(result)
        if (result.status === "success") {
            dispatch(updateExistingUserSuccess(result))
        } else {
            dispatch(updateExistingUserFailed(result.message));
        }
    } catch (error) {
        if (error.message === "Request failed with status code 401") {
            dispatch(updateExistingUserFailed("User allready exist"))
        } else {
            dispatch(updateExistingUserFailed(error.message));
        }
    }
}