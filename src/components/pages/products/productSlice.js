import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    products: [],
    error: "",
    singleProduct: {},
    singleProductError: "",
    message: "",
    deleteError: "",
    createMessage: "",
    createError: "",
    createIsLoading: false,
    updateMessage: "",
    updateError: "",
    updateIsLoading: false
}

const productSlice = createSlice({
    name: "getAllProducts",
    initialState,
    reducers: {
        fetchAllProductsLoading: state => {
            state.isLoading = true;
        },
        fetchAllProductsSuccess: (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
            state.error = '';
        },
        fetchAllProductsFailed: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        fetchSingleProductsLoading: state => {
            state.isLoading = true;
        },
        fetchSingleProductsSuccess: (state, action) => {
            state.isLoading = false;
            state.singleProduct = action.payload;
            state.singleProductError = '';
        },
        fetchSingleProductsFailed: (state, action) => {
            state.isLoading = false;
            state.singleProductError = action.payload;
        },
        deleteProductLoading: state => {
            state.isLoading = true;
        },
        deleteProductSuccess: (state, action) => {
            state.isLoading = false;
            state.message = action.payload;
            state.deleteError = '';
        },
        deleteProductFailed: (state, action) => {
            state.isLoading = false;
            state.deleteError = action.payload;
        },
        createProductLoading: state => {
            state.createIsLoading = true;
            state.createMessage = '';
            state.createError = '';
        },
        createProductSuccess: (state, action) => {
            state.createIsLoading = false;
            state.createMessage = action.payload;
            state.createError = '';
        },
        createProductFailed: (state, action) => {
            state.createIsLoading = false;
            state.createError = action.payload;
        },
        updateProductLoading: state => {
            state.updateIsLoading = true;
            state.updateMessage = '';
            state.updateError = '';
        },
        updateProductSuccess: (state, action) => {
            state.updateIsLoading = false;
            state.updateMessage = action.payload;
            state.updateError = '';
        },
        updateProductFailed: (state, action) => {
            state.updateIsLoading = false;
            state.updateError = action.payload;
        },
    }
})


const { reducer, actions } = productSlice;

const { fetchAllProductsLoading,
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
    updateProductSuccess } = actions;

export {
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
};

export default reducer