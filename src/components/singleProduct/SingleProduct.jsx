import React from 'react'
import { Link } from 'react-router-dom'

const SingleProduct = ({ product }) => {
    return (
        <div className="col-sm-12 col-lg-3 my-3">
            <div className="card h-100 px-3">
                <Link key={product._id} to={`/products/${product._id}`}>
                    <img src={product.image} className="product-img" alt={product.name} />
                    <hr />
                    <h5>{product.name}</h5>
                    <h5>{product.price}</h5>
                    <h6>{product.rating}</h6>
                </Link>
            </div>
        </div>
    )
}

export default SingleProduct
