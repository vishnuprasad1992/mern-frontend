import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    orders: [],
    error: false,
    allIsLoading: false,
    allOrders: [],
    allError: false,

}

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        fetchingOrdersLoading: state => {
            state.isLoading = true;
        },
        fetchingOrdersSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.orders = payload;
            state.error = false;
        },
        fetchingOrdersFailed: (state) => {
            state.isLoading = false;
            state.error = true;
        },
        fetchingAllOrdersLoading: state => {
            state.allIsLoading = true;
        },
        fetchingAllOrdersSuccess: (state, { payload }) => {
            state.allIsLoading = false;
            state.allOrders = payload;
            state.allError = false;
        },
        fetchingAllOrdersFailed: (state) => {
            state.allIsLoading = false;
            state.allError = true;
        }
    }
})

const { reducer, actions } = ordersSlice;
const { fetchingOrdersFailed,
    fetchingOrdersLoading,
    fetchingOrdersSuccess,
    fetchingAllOrdersFailed,
    fetchingAllOrdersLoading,
    fetchingAllOrdersSuccess } = actions;
export { fetchingOrdersFailed,
    fetchingOrdersLoading,
    fetchingOrdersSuccess,
    fetchingAllOrdersFailed,
    fetchingAllOrdersLoading,
    fetchingAllOrdersSuccess };
export default reducer;