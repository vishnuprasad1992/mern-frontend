import {configureStore} from "@reduxjs/toolkit";
import ProductReducer from "./components/pages/products/productSlice";
import cartReducer from "./components/pages/productDetails/cartSlice";
import registerReducer from "./components/pages/registeration/registerSlice";
import loginReducer from "./components/pages/login/loginSlice";
import placeOrderReducer from "./components/pages/placeOrder/placeOrderSlice";
import ordersReducer from "./components/pages/orders/ordersSlice";
import orderInfoReducer from "./components/pages/orderInfo/orderInfoSlice";
import reviewReducer from "./components/review/reviewSlice";
import updateSlice from "./components/pages/profile/profileSlice" 
import UserReducer from "./components/pages/admin/users/userSlice";




export const store = configureStore({
    reducer:{
        products:ProductReducer,
        cartItems : cartReducer,
        register:registerReducer,
        login : loginReducer,
        placeOrder : placeOrderReducer,
        orders:ordersReducer,
        singleOrder:orderInfoReducer,
        reviews:reviewReducer,
        updateUser : updateSlice,
        Users:UserReducer
    }
}) 