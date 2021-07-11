import axios from 'axios';

const productURL = "https://mern-ecommerce-fullstack.herokuapp.com/api/products";
const addProductURL = "https://mern-ecommerce-fullstack.herokuapp.com/api/products/add_new_product";
const placeOrderURL = "https://mern-ecommerce-fullstack.herokuapp.com/api/orders/place_order";
const orderURL ="https://mern-ecommerce-fullstack.herokuapp.com/api/orders/get_all_orders"
const singleOrderURL ="https://mern-ecommerce-fullstack.herokuapp.com/api/orders/get_single_order"
const addReviewURL = "https://mern-ecommerce-fullstack.herokuapp.com/api/products/add_reviews"
const deleteProductUrl = "https://mern-ecommerce-fullstack.herokuapp.com/api/products/delete/"
const updateProductUrl = "https://mern-ecommerce-fullstack.herokuapp.com/api/products/update/"
const allOrderURL ="https://mern-ecommerce-fullstack.herokuapp.com/api/orders/all_orders"




export const createProduct = (data) =>{
    return new Promise(async(resolve,reject)=>{
        try {
            const addedProduct = await axios.post(addProductURL,data);
            addedProduct.data && resolve(addedProduct.data);
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}


export const updateExistingProduct = (data,id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.patch(updateProductUrl+id,data);
            resolve(result.data)
        } catch (error) {
            reject(error)
        }
    })
}


export const totalProducts = () =>{
    return new Promise(async(resolve,reject)=>{
        try {
            const product = await axios.get(productURL);
              product.data && resolve(product.data);
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}


export const singleProduct = (id) =>{
    return new Promise(async(resolve,reject)=>{
        try {
            const singleProduct = await axios.get(productURL+"/"+id);
              singleProduct.data && resolve(singleProduct.data);
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}

export const getPlaceOrderDetails=({token,subTotal,currentUser,cartItems})=>{
    return new Promise(async(resolve,reject)=>{
        try {
            const result = await axios.post(placeOrderURL,{token,subTotal,currentUser,cartItems})
            resolve(result.data)
        } catch (error) {
            console.log(error);
            reject(error.message)
        }
    })
}


export const getOrders = (userId) =>{
    return new Promise(async(resolve,reject)=>{
        try {
            const allOrders = await axios.post(orderURL,{userId});
              allOrders.data && resolve(allOrders.data);
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}

export const getTotalOrders = () =>{
    return new Promise(async(resolve,reject)=>{
        try {
            const totalOrders = await axios.post(allOrderURL);
            totalOrders.data && resolve(totalOrders.data);
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}

export const getSingleOrder = (_id) =>{
    return new Promise(async(resolve,reject)=>{
        try {
            const singleOrder = await axios.post(singleOrderURL,{_id});
              singleOrder.data && resolve(singleOrder.data);
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}

export const addReview = ({review,productId,currentUser}) =>{
     const data = {review,productId,currentUser}
    return new Promise(async(resolve,reject)=>{
        try {
            const addReviewAndComment = await axios.post(addReviewURL,data);
            addReviewAndComment.data && resolve(addReviewAndComment.data);
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}


export const deleteselectedProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.delete(deleteProductUrl+id);
            resolve(result.data)
        } catch (error) {
            reject(error)
        }
    })
}
