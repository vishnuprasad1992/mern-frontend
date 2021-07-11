import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    users: [],
    error: "",
    message:"",
    deleteError:""
}

const userSlice = createSlice({
    name: "getAllUsers",
    initialState,
    reducers: {
        fetchAllUsersLoading: state => {
            state.isLoading = true;
        },
        fetchAllUsersSuccess: (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
            state.error = '';
        },
        fetchAllUsersFailed: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        deleteUsersLoading: state => {
            state.isLoading = true;
        },
        deleteUsersSuccess: (state, action) => {
            state.isLoading = false;
            state.message = action.payload;
            state.deleteError = '';
        },
        deleteUsersFailed: (state, action) => {
            state.isLoading = false;
            state.deleteError = action.payload;
        }
    }
})


const { reducer, actions } = userSlice;

const { fetchAllUsersLoading,
    fetchAllUsersSuccess,
    fetchAllUsersFailed,
    deleteUsersFailed,
    deleteUsersLoading,
    deleteUsersSuccess
} = actions;

export { fetchAllUsersLoading,
    fetchAllUsersSuccess,
    fetchAllUsersFailed,
    deleteUsersFailed,
    deleteUsersLoading,
    deleteUsersSuccess
};

export default reducer