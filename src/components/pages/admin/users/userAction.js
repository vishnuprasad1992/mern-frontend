import { fetchAllUsersLoading,
    fetchAllUsersSuccess,
    fetchAllUsersFailed,
    deleteUsersFailed,
    deleteUsersLoading,
    deleteUsersSuccess
} from "./userSlice";
import { deleteselectedUser, totalUsers } from "../../../../api/userApi"

export const getAllUsers = () => async dispatch => {
    try {
        dispatch(fetchAllUsersLoading());
        const allUsers = await totalUsers();
        if (allUsers.status === "success") {
            return dispatch(fetchAllUsersSuccess(allUsers.users))
        }
        return dispatch(fetchAllUsersFailed(allUsers.message))
    } catch (error) {
        dispatch(fetchAllUsersFailed(error.message))
    }
}


export const deleteUser = (id) => async dispatch => {
    try {
        dispatch(deleteUsersLoading());
        const deleteStatus = await deleteselectedUser(id);
        if (deleteStatus.status === "success") {
            return dispatch(deleteUsersSuccess(deleteStatus.message))
        }
        return dispatch(deleteUsersFailed(deleteStatus.message))
    } catch (error) {
        dispatch(deleteUsersFailed(error.message))
    }
}
