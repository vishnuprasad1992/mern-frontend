import './productDetails.css'
import { useParams } from 'react-router';
import { getSingleProductDetails } from '../products/productActions';
import { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addProductsToCart } from './cartActions';
import Review from '../../review/Review';


const ProductDetails = () => {
    const [ qty,setQty ] =useState(1)
    const {isLoading,singleProduct,singleProductError} = useSelector(state=>state.products)
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(()=>{
        const singleProd = async (id)=>{
            await dispatch(getSingleProductDetails(id))
        }
        singleProd(id);

    },[id,dispatch])

    const { price, name,image, description, countInStock } = singleProduct

    const addToCart = ()=>{
        dispatch(addProductsToCart(qty,singleProduct))
    }
   
    if(isLoading){
        return (
            <div className="loading">
                <i style={{color:"darkslategray"}} className="fas fa-spinner fa-2x fa-spin"></i>
            </div>
        )
    }
    return (
        <div className="container">
            <div className="row ">
            {singleProductError && <div className="alert alert-danger text-center">{singleProductError}</div> }
                <div className="col-sm-12 col-lg-6 my-5 border shadow image px-3">
                    <h5 className="my-3 fw-bold text-center">{name}</h5>
                    <hr />
                    <img src={image} alt={name} />
                    <hr />
                    <p className="my-3">{description}</p>
                </div>
                <div className="col-sm-12 col-lg-6 px-5 my-5">
                    <h5>Price : Rs.{price}</h5>
                    <hr />
                    <div className="d-flex">
                        <h5>Select Quantity : </h5>
                        <select className="ms-3" value={qty} onChange= {(e) => {setQty(e.target.value)}} >
                            {[...Array(countInStock).keys()].map((c, i) => {
                                return <option key={i} value={i + 1}>{c + 1}</option>
                            })}
                        </select>
                    </div>
                    <hr />
                    {countInStock>0 ?
                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-success" onClick={addToCart}> Add to Cart</button>
                    </div>:
                    <div className="d-flex justify-content-end">
                        out of stock
                    <button type="submit" disabled className="btn btn-success" onClick={addToCart}> Add to Cart</button>
                </div>
                    
                    }
                    <hr />
                    <Review product = {singleProduct} />
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
