import { useEffect } from "react";
import { getOrdersByUserId } from "./ordersActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Orders = () => {
    const { isLoading, orders, error } = useSelector(state => state.orders)
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.getItem("user")) {
            dispatch(getOrdersByUserId());
        }
        else {
            window.location.href = "/login"
        }
    }, [dispatch])
    return (
        <div className="container">
            <div className="row  justify-content-center">
                <h1 className="text-center mt-5">Your Orders</h1>
                <div className="col-md-12  col-lg-10">
                    {isLoading && <div className="text-center" > <i className="fas ms-2  fa-spinner fa-3x fa-spin"></i></div>}
                    <table className="table my-3 table-bordered table-hover table-striped table-responsive">
                        <thead >
                            <tr className="text-center bg-warning">
                                <th> Order ID</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Transaction ID</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {error && <div className="alert alert-danger text-center">Something went wrong </div>}
                            {orders ? orders.map((order) =>
                            (
                            <tr key={order._id}>
                                <td><Link className="link" to={`/order_info/${order._id}`}>{order._id}</Link></td>
                                <td>Rs.{order.orderAmount}</td>
                                <td>{order.createdAt.substring(0,10)}</td>
                                <td>{order.transactionId}</td>
                                <td className="text-center">{order.isDelivered ? "order delivered" : "order placed"}</td>
                            </tr>)
                            ) :
                                <tr>
                                    <td colSpan="5">No orders to show</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Orders
