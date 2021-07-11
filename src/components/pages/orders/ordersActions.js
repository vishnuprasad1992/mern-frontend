import { getOrders, getTotalOrders } from "../../../api/productsApi";
import {
    fetchingOrdersFailed,
    fetchingOrdersLoading,
    fetchingOrdersSuccess,
    fetchingAllOrdersFailed,
    fetchingAllOrdersLoading,
    fetchingAllOrdersSuccess
} from "./ordersSlice";

export const getOrdersByUserId = () => async (dispatch, getState) => {
    const userId = getState().login.loginMessage._id
    try {
        dispatch(fetchingOrdersLoading())
        const result = await getOrders(userId);
        if (result) {
            dispatch(fetchingOrdersSuccess(result))
        }
    } catch (error) {
        dispatch(fetchingOrdersFailed())
    }
}


export const getAllOrders = () => async (dispatch) => {
    try {
        dispatch(fetchingAllOrdersLoading())
        const result = await getTotalOrders();
        if (result) {
            dispatch(fetchingAllOrdersSuccess(result))
        }
    } catch (error) {
        dispatch(fetchingAllOrdersFailed())
    }
}