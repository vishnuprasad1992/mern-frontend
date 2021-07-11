import './filter.css';
import { useState } from 'react';
import {useDispatch} from "react-redux";
import { getFilteredProducts } from '../pages/products/productActions';

const Filter = () => {
    const dispatch = useDispatch()
    const [search,setSearch] = useState("");
    const [sort,setSort] = useState("popular");
    const [category,setCategory] = useState("all");
 
    return (
        <div className="container">
            <div className="row my-3">
                <div className="col-lg-3 mb-3 col-md-12">
                    <input 
                    type="text" 
                    placeholder="search" 
                    className="col-12 fs-6 fw-bold input-style"
                    value={search}
                    onChange ={e=> setSearch(e.target.value)}
                    />
                </div>
                <div className="col-lg-3 mb-3 col-md-12 ">
                    <select value={sort} onChange ={e=> setSort(e.target.value)} className="col-12 input-style" >
                        <option value="popular">Popular</option>
                        <option value="lowToHigh">High to Low</option>
                        <option value="highToLow">Low to High</option>
                    </select>
                </div>
                <div className="col-lg-3 mb-3 col-md-12">
                    <select value={category} onChange ={e=> setCategory(e.target.value)} className="col-12 input-style" >
                        <option value="all">All</option>
                        <option value="electronics">Electronics</option>
                        <option value="laptop">Laptops</option>
                        <option value="shoe">Shoe</option>
                    </select>
                </div>
                <div className="col-lg-3 col-md-12">
                    <button className="btn btn-dark col-12 fs-5" onClick={()=>dispatch(getFilteredProducts(search,sort,category))}>Filter</button>
                </div>
            </div>
        </div>
    )
}

export default Filter
