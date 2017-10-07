import { ADD_CATEGORY_PRODUCT_SUCCESS, DELETE_CATEGORY_PRODUCT_SUCCESS, ADD_CATEGORY_PRODUCT_FAILURE, ADD_CATEGORY_PRODUCT_REQUEST, DELETE_CATEGORY_PRODUCT_FAILURE, DELETE_CATEGORY_PRODUCT_REQUEST, CHANGE_NAME_FORM_CATEGORY, GET_ALL_CATEGORY_PRODUCT } from './actionTypes'
import {jsonPost} from '../helpers/requestHelper'

var serialize = function (data) {
    return Object.keys(data).map(function (keyName) {
        return encodeURIComponent(keyName) + '=' + encodeURIComponent(data[keyName])
    }).join('&');
};


export function addCategoryProduct (dispatch, store) {

    return () => {
        const categoryproduct = store.getState().categoryProductFormName;
        console.log(`categoryproduct: ${categoryproduct}`)
        dispatch(addCategoryProductRequest(categoryproduct))

        return jsonPost(`/recipes/categoryProduct/add`, {categoryproduct})
                .then(response => response.json())
                .then(categoryproduct => dispatch(addCategoryProductSuccess(categoryproduct)))
                .catch(err => addCategoryProductFailure(err))
    }
}

function addCategoryProductRequest(categoryproduct){
    return {
        type: ADD_CATEGORY_PRODUCT_REQUEST,
        payload: {
            categoryproduct
        },
        meta: null,
        error: null
    }
}

function addCategoryProductSuccess(categoryproduct){
    return {
        type: ADD_CATEGORY_PRODUCT_SUCCESS,
        payload: {
            categoryproduct
        },
        meta: null,
        error: null
    }
}

function addCategoryProductFailure(err){
    return {
        type: ADD_CATEGORY_PRODUCT_FAILURE,
        payload: {
            error: err
        },
        meta: null,
        error: null
    }
}

export function deleteCategoryProduct (dispatch) {

    return categoryproduct => {
        dispatch(deleteCategoryProductRequest(categoryproduct))

        return fetch(`/recipes/categoryProduct/${categoryproduct._id}`, { method: 'DELETE' })
                .then(response => response.json())
                .then(categoryproduct => dispatch(deleteCategoryProductSuccess(categoryproduct)))
                .catch(err => deleteCategoryProductFailure(err))
    }
}

function deleteCategoryProductRequest(categoryproduct){
    return {
        type: DELETE_CATEGORY_PRODUCT_REQUEST,
        payload: {
            categoryproduct
        },
        meta: null,
        error: null
    }
}

function deleteCategoryProductSuccess(categoryproduct){
    return {
        type: DELETE_CATEGORY_PRODUCT_SUCCESS,
        payload: {
            categoryproduct
        },
        meta: null,
        error: null
    }
}

function deleteCategoryProductFailure(err){
    return {
        type: DELETE_CATEGORY_PRODUCT_FAILURE,
        payload: {
            error: err
        },
        meta: null,
        error: null
    }
}

export function categoryProductNameChange(dispatch){
    return name => {
        dispatch({
            type: CHANGE_NAME_FORM_CATEGORY,
            payload: name,
            meta: null,
            error: null
        })
    }
}

export function getAllCategories(store, dispatch) {
    return () => {
        const categoryProductList = store.getState().categoryProduct;
        if(!categoryProductList.length){
            fetch('/categoryProduct/all', {method: 'GET'})
                .then(response => response.json())
                .then(categories => dispatch({
                    type: GET_ALL_CATEGORY_PRODUCT,
                    payload: categories,
                    meta: null,
                    error: null
                }))
        }
    }
}

