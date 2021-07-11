import { addReviewFailed,addReviewInitialize,addReviewSuccess } from "./reviewSlice";
import { addReview } from "../../api/productsApi";

export const addReviewAndComment = (review,productId) => async (dispatch,getState) => {
    const currentUser = getState().login.loginMessage
    try {
        dispatch(addReviewInitialize());
        const product = await addReview({review,productId,currentUser});
        if (product.status === "success") {
            return dispatch(addReviewSuccess(product.result))
        }
        return dispatch(addReviewFailed(product.message))
    } catch (error) {
        console.log(error)
        dispatch(addReviewFailed())
    }
}