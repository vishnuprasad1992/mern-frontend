import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts,deleteProduct } from "../../products/productActions";
import { Link } from "react-router-dom"

const Products = () => {

    const { products, isLoading, error,message,deleteError } = useSelector(state => state.products)
    const dispatch = useDispatch();
    useEffect(() => {
        const getProducts = async () => {
            await dispatch(getAllProducts());
        }
        getProducts();
        if(message === "Product deleted successfull"){
            getProducts();
        }
    }, [dispatch,message])


    return (
        <div className="container">
            <div className="row  justify-content-center">
                <h1 className="text-center mt-5"> All Products</h1>
                <div className="col-md-12  col-lg-10">
                    {isLoading && <div className="text-center"><i className="fas ms-2 fa-spinner fa-2x fa-spin"></i></div>}
                    {error && <div className="alert alert-danger text-center">{error}</div>}
                    {deleteError && <div className="alert alert-danger text-center">{deleteError}</div>}
                    {message && <div className="alert alert-danger text-center">{message}</div>}
                    <div class="table-responsive">
                    <table className="table my-3 table-bordered table-hover table-striped">
                        <thead >
                            <tr className="text-center bg-warning">
                                <th> Product Id </th>
                                <th>Name</th>
                                <th>Stock</th>
                                <th>Price</th>
                                <th>Rating</th>
                                <th>category</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products ? products.map((product) =>
                            (
                                <tr key={product._id}>
                                    <td>{product._id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.countInStock}</td>
                                    <td>Rs.{product.price}</td>
                                    <td>{product.rating}</td>
                                    <td>{product.category}</td>
                                    <td className=" text-center">
                                        <Link to={`/admin_login/products/${product._id}`}>
                                        <i className="text-success me-2 fas fa-edit"></i>
                                        </Link>
                                        <i onClick={()=> dispatch(deleteProduct(product._id))} className="fas text-danger ms-2 pointer fa-1x fa-trash-alt"></i>
                                        </td>
                                </tr>)
                            ) :
                                <tr>
                                    <td colSpan="5">No products to show</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Products
