import { addingToCart,deleteCartItem } from "./cartSlice";
export const addProductsToCart = (qty,prod)=> (dispatch,getState)=>{
    
    const cartItems = {
        name: prod.name,
        _id:prod._id,
        countInStock:prod.countInStock,
        qty,
        price:prod.price
    }

    dispatch(addingToCart(cartItems));
    localStorage.setItem("cart-items",(JSON.stringify(getState().cartItems.cartItems)))

}

export const deleteItemFromCart = (item)=> (dispatch,getState)=>{

    dispatch(deleteCartItem(item));
    localStorage.setItem("cart-items",(JSON.stringify(getState().cartItems.cartItems)))
}
