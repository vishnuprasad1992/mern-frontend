import { getSingleOrder } from "../../../api/productsApi";
import  { fetchingSingleOrdersFailed,fetchingSingleOrdersLoading,fetchingSingleOrdersSuccess } from "./orderInfoSlice";

export const getOrdersById = (id) =>async(dispatch)=>{
    try {
        dispatch(fetchingSingleOrdersLoading())
        const result = await getSingleOrder(id);
        if(result){
            dispatch(fetchingSingleOrdersSuccess(result))
        }
    } catch (error) {
        dispatch(fetchingSingleOrdersFailed())
    }
}
