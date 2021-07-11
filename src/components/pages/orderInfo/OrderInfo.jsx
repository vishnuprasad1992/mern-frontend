import './orderInfo.css'
import { useParams } from 'react-router';
import { getOrdersById } from './orderInfoActions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

const OrderInfo = () => {
    const { isLoading, singleOrder, error } = useSelector(state => state.singleOrder)
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getOrdersById(id))
    }, [dispatch, id])
    return (
        <div className="bg-info order-info">
            <div className="container py-5">
                {isLoading && <div className="text-center" > <i className="fas ms-2  fa-spinner fa-3x fa-spin"></i></div>}
                {error && <div className="alert alert-danger text-center">Something went wrong </div>}
                <div className="row mb-3  mx-3">
                    <div className="get-justified">
                        <div className="col-lg-5 me-5 col-md-12">
                            <div className="card bg-light h-100 p-3">
                                <h3 className="text-warning">Items in your order</h3>
                                <hr />
                                {singleOrder &&
                                    <div className="text-left">
                                        {singleOrder.orderItems.map(orderItem =>
                                            <div>
                                                <h5>{orderItem.name}</h5>
                                                <h5>Quantity : {orderItem.quantity}</h5>
                                                <h5>Price {orderItem.quantity} * {orderItem.price} =
                                                    {orderItem.quantity * orderItem.price}
                                                </h5>
                                            </div>
                                        )
                                        }
                                        <hr />
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="col-lg-5 ms-5 col-md-12">
                            <div className="card bg-light p-3">
                                <h3 className="text-warning">Order Details</h3>
                                <hr />
                                {singleOrder &&
                                    <div className="text-right">
                                        <h5>Order ID :{singleOrder._id}</h5>
                                        <h5>Total amount : {singleOrder.orderAmount}</h5>
                                        <h5>Date of order : {singleOrder.createdAt.substring(0, 10)}</h5>
                                        <h5>Transaction ID : {singleOrder.transactionId}</h5>
                                        <h5>Order Status : {singleOrder.isDelivered ? "Order Delivered" : "Order Placed"}</h5>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="shipping-right">
                        <div className="m-3  col-md-12">
                            <div className="card bg-light p-3">
                                <h3 className="text-warning">Shipping Address</h3>
                                <hr />
                                {singleOrder &&
                                    <div className="text-right">
                                        <h5>Name : {singleOrder.name}</h5>
                                        <h5>Address : {singleOrder.shippingAddress.address}</h5>
                                        <h5>City : {singleOrder.shippingAddress.city}</h5>
                                        <h5>PIN Code : {singleOrder.shippingAddress.pin}</h5>
                                        <h5>Country : {singleOrder.shippingAddress.country}</h5>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <h5 className="my-2 text-warning">Replacement Conditions :</h5>
                <ul className="text-white">
                    <li>A free replacement cannot be created for an item which returned or replaced earlier</li>
                    <li>If your is not eligible for free replacement due to any reasons, you can return for refund </li>
                    <li>If the item has missing part or accessories, you may try to contact the manufacturer for assistance, manufacturer contact information can useually be found on the item packaging or paparwork included in the item</li>
                </ul>
            </div>
        </div>
    )
}

export default OrderInfo
