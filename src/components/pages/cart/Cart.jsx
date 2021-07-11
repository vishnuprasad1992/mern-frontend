import "./cart.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductsToCart, deleteItemFromCart } from "../productDetails/cartActions";
import Checkout from "../../checkout/Checkout";


const Cart = () => {
    const { cartItems } = useSelector(state => state.cartItems);
    const dispatch = useDispatch();
    const subTotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0)

    return (
        <div className="container">
            <div className="row  justify-content-center">
                <h1 className="text-center mt-5">My Cart</h1>
                <div className="col-md-12 shadow border col-lg-9 ">
                    <table className="table my-3 table-bordered table-hover table-striped table-responsive">
                        <thead >
                            <tr className="text-center bg-warning">
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Net Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!cartItems.length ?
                                <tr className="text-center" style={{ height: "50px", fontWeight: "bold" }}><td colSpan="5">No items in your cart, please add the items</td></tr> :
                                cartItems.map(item =>
                                    <tr key={item._id} className="text-center">
                                        <td style={{ textAlign: "left" }}>
                                            <Link className="link" to={`/products/${item._id}`}>
                                                {item.name}
                                            </Link>
                                        </td>
                                        <td>{item.price}</td>
                                        <td>
                                            <select value={item.qty} className="pointer" onChange={(e) => dispatch(addProductsToCart(e.target.value, item))}>
                                                {[...Array(item.countInStock).keys()].map((c, i) => {
                                                    return <option key={i} value={i + 1}>{i + 1}</option>
                                                })}
                                            </select>
                                        </td>
                                        <td>{item.qty * item.price}</td>
                                        <td><i onClick={() => dispatch(deleteItemFromCart(item))} className="fas text-danger text-center pointer fa-1x fa-trash-alt"></i></td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                    <hr />
                    <h3 className="text-center text-success"><span>Subtotal : </span>Rs.{subTotal}/-</h3>
                    <hr />
                    <Checkout amount = {subTotal} />
                </div>
            </div>

        </div>
    )
}

export default Cart
