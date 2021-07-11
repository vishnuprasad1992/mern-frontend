import {
    fetchAllProductsLoading,
    fetchAllProductsSuccess,
    fetchAllProductsFailed,
    fetchSingleProductsFailed,
    fetchSingleProductsSuccess,
    fetchSingleProductsLoading,
    deleteProductFailed,
    deleteProductLoading,
    deleteProductSuccess,
    createProductFailed,
    createProductLoading,
    createProductSuccess,
    updateProductFailed,
    updateProductLoading,
    updateProductSuccess
} from "./productSlice";
import { totalProducts, singleProduct, deleteselectedProduct, createProduct, updateExistingProduct } from "../../../api/productsApi"


export const createNewProduct = (data) => async dispatch => {
    try {
        dispatch(createProductLoading());
        const newProduct = await createProduct(data);
        if (newProduct.status === "success") {
            return dispatch(createProductSuccess(newProduct.message))
        }
        return dispatch(createProductFailed(newProduct.message))
    } catch (error) {
        dispatch(createProductFailed(error.message))
    }
}


export const updatedProduct = (data,id) => async dispatch => {
    try {
        dispatch(updateProductLoading());
        const updatedProduct = await updateExistingProduct(data,id);
        if (updatedProduct.status === "success") {
            return dispatch(updateProductSuccess(updatedProduct.message))
        }
        return dispatch(updateProductFailed(updatedProduct.message))
    } catch (error) {
        dispatch(updateProductFailed(error.message))
    }
}



export const getAllProducts = () => async dispatch => {
    try {
        dispatch(fetchAllProductsLoading());
        const products = await totalProducts();
        if (products.status === "success") {
            return dispatch(fetchAllProductsSuccess(products.result))
        }
        return dispatch(fetchAllProductsFailed(products.message))
    } catch (error) {
        dispatch(fetchAllProductsFailed(error.message))
    }
}

export const getSingleProductDetails = (id) => async dispatch => {
    try {
        dispatch(fetchSingleProductsLoading());
        const product = await singleProduct(id);
        if (product.status === "success") {
            return dispatch(fetchSingleProductsSuccess(product.result))
        }
        return dispatch(fetchAllProductsFailed(product.message))
    } catch (error) {
        dispatch(fetchSingleProductsFailed(error.message))
    }
}

export const getFilteredProducts = (search, sort, category) => async dispatch => {
    try {
        dispatch(fetchAllProductsLoading());
        const products = await totalProducts();
        var filteredProducts = products.result;

        if (products.status === "success") {
            if (search) {
                filteredProducts = products.result.filter((product) =>
                    product.name.toLowerCase().includes(search)
                );
            }
            else if (sort === "lowToHigh") {
                filteredProducts = products.result.sort((a, b) => (-a.price + b.price))
            } else {
                filteredProducts = products.result.sort((a, b) => (a.price - b.price))
            }
            if (category !== "all") {
                filteredProducts = products.result.filter((product) => product.category.toLowerCase().includes(category))
            }
        }
        dispatch(fetchAllProductsSuccess(filteredProducts))
    } catch (error) {
        dispatch(fetchAllProductsFailed(error.message))
    }
}

export const deleteProduct = (id) => async dispatch => {
    try {
        dispatch(deleteProductLoading());
        const deleteStatus = await deleteselectedProduct(id);
        if (deleteStatus.status === "success") {
            return dispatch(deleteProductSuccess(deleteStatus.message))
        }
        return dispatch(deleteProductFailed(deleteStatus.message))
    } catch (error) {
        dispatch(deleteProductFailed(error.message))
    }
}
