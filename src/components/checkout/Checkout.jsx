import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { placeOrderAction } from '../pages/placeOrder/placeOrderActions'

const Checkout = ({ amount }) => {

    const dispatch = useDispatch();
    const { isLoading, success, error } = useSelector(state => state.placeOrder)
    const key = "pk_test_51JAVDlSAjehwtp59NOx2bKTkx9jM7lvcAJ6gik9sGLFvWUHL78aMI4N3JaVTVxTtXsdoQvvI2AJ6CAXyz4TvKAb000WOYudBp1"

    
    const tokenHandler = (token) => {
        dispatch(placeOrderAction(token, amount))
    }

    const validate = ()=>{
        if(!localStorage.getItem("user")){
            window.location.href = "/login"
        }
    }

    return (
        <StripeCheckout
            token={tokenHandler}
            stripeKey={key}
            currency="INR"
            amount={amount * 100}
            shippingAddress
        >
            {isLoading && <div className="text-center"><i className="fas ms-2  fa-spinner fa-3x fa-spin"></i></div>}
            {error && <div className="alert alert-danger text-center">Something went wrong </div>}
            {success && <div className="alert alert-success text-center">Your order placed successfully</div>}
            <div className="text-center my-3">
                <button className="btn btn-success" onClick={validate} >Pay now</button>
            </div>
        </StripeCheckout>

    )
}

export default Checkout
