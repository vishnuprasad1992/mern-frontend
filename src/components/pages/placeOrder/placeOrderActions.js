import { getPlaceOrderDetails } from "../../../api/productsApi";
import { orderPlaceInitialize,orderPlaceSuccess,orderPlaceError } from "./placeOrderSlice";
import { resetCart } from "../productDetails/cartSlice";

export const placeOrderAction = (token,subTotal)=> async (dispatch,getState) =>{
    try {
        dispatch(orderPlaceInitialize())
        const wholeCart = getState().cartItems.cartItems;
        var cartItems = [];
        for (let i = 0; i < wholeCart.length; i++) {
            
            const item = {
                name:wholeCart[i].name,
                _id:wholeCart[i]._id,
                price:wholeCart[i].price,
                quantity : wholeCart[i].qty,
            }

            cartItems.push(item)
        }      
        const currentUser = getState().login.loginMessage;  
        const result = await getPlaceOrderDetails({token,subTotal,currentUser,cartItems})
        if(result.status==="success"){
            dispatch(orderPlaceSuccess())
            dispatch(resetCart())
            localStorage.removeItem('cart-items')
        }
    } catch (error) {
        console.log(error);
        dispatch(orderPlaceError())
    } 
}