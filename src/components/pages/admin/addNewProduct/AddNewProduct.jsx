import './addNewProduct.css';
import {useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import { createNewProduct } from '../../products/productActions';


const AddNewProduct = () => {
    const dispatch = useDispatch()
    const {createIsLoading,createMessage,createError} = useSelector(state => state.products);

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [desc, setDesc] = useState('');
    const [stocks, setStocks] = useState('');
    const [image, setImage] = useState('')

    const addNewProduct=(e)=>{
        e.preventDefault(); 

        const newProduct = {
            name,
            price,
            category,
            description:desc,
            countInStock:stocks,
            image
        }
        dispatch(createNewProduct(newProduct))
    }
    return (
        <div className="add-new-product">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12 bg-light my-3 add-beautify">
                        <h1 className="text-center mb-3 heading-color" >ADD NEW PRODUCT<i className="fas fa-plus-square ms-2"></i> </h1>
                        {createError && <div className="alert alert-danger text-center">{createError}</div> }
                        {createMessage && <div className="alert alert-danger text-center">{createMessage}</div> }
                        {createIsLoading && <div className="text-center"><i className="fas ms-2 fa-spinner fa-2x fa-spin"></i></div>}
                        <form onSubmit={addNewProduct}>
                            <div className="mb-3 ">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="price"
                                    placeholder="Price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="stock" className="form-label">Number of stocks</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="stock"
                                    placeholder="no. of stocks"
                                    value={stocks}
                                    onChange={(e) => setStocks(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">Category</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="category"
                                    placeholder="category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="desc" className="form-label">Description</label>
                                <textarea
                                    className="form-control"
                                    id="desc"
                                    placeholder="description"
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="url" className="form-label">Image URL</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="url"
                                    placeholder="Image URL"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary text-center ">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AddNewProduct
