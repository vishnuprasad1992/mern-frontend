import './products.css';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { getAllProducts } from "./productActions";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Filter from '../../filter/Filter';


const Products = () => {
    const {products,isLoading,error} = useSelector(state=>state.products)
    const dispatch = useDispatch();
    useEffect(() => {
        const getProducts = async ()=>{
           await dispatch(getAllProducts());
        }
        getProducts();
    }, [dispatch])
    if(isLoading){
        return (
            <div className="loading">
                <i style={{color:"darkslategray"}} className="fas fa-spinner fa-2x fa-spin"></i>
            </div>
        )
    }
    return (
        <div className="container">
            {error && <div className="alert alert-danger text-center">{error}</div> }
            <div className="row m-3">
            <Filter/>
                {products.length && products.map((product) => {
                    return <div key={product._id} className="col-sm-12  col-lg-3  my-3">
                        <Link className="link" to={`/products/${product._id}`}>
                            <div className="card mx-1 shadow h-100 card-height  px-3">
                                <img src={product.image} className="product-img p-2" alt={product.name} />
                                <hr />
                                <h5>{product.name}</h5>
                                <h5>Rs.{product.price}</h5>
                                <ReactStars
                                    value={product.rating}
                                    edit={false}
                                    count={5}
                                    size={24}
                                    isHalf={true}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                    activeColor="#ffd700"
                                />
                            </div>
                        </Link>
                    </div>

                })}
            </div>
        </div>
    )
}

export default Products
