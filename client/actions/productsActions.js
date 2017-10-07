import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS } from './actionTypes'
import {jsonPost} from '../helpers/requestHelper'

export function addProduct (product) {

    return dispatch => {
        dispatch(addProductRequest(product))

        return fetch(`/recipes/product/${recipeId}`, { method: 'POST' })
                .then(response => response.json())
                .then(product => dispatch(addProductRequest(product)))
                .catch(err => addProductFailure(err))
    }
}

function addProductRequest(product){
    return {
        type: ADD_PRODUCT_REQUEST,
        payload: {
            product
        },
        meta: null,
        error: null
    }
}

function addProductSuccess(product){
    return {
        type: ADD_PRODUCT_SUCCESS,
        payload: {
            product
        },
        meta: null,
        error: null
    }
}

function addProductFailure(err){
    return {
        type: ADD_PRODUCT_FAILURE,
        payload: {
            error: err
        },
        meta: null,
        error: null
    }
}

export function deleteProduct (product) {

    return dispatch => {
        dispatch(deleteProductRequest(product))

        return fetch(`/recipes/product/${recipeId}`, { method: 'DELETE' })
                .then(response => response.json())
                .then(product => dispatch(deleteProductRequest(product)))
                .catch(err => deleteProductFailure(err))
    }
}

function deleteProductRequest(product){
    return {
        type: DELETE_PRODUCT_REQUEST,
        payload: {
            product
        },
        meta: null,
        error: null
    }
}

function deleteProductSuccess(product){
    return {
        type: DELETE_PRODUCT_SUCCESS,
        payload: {
            product
        },
        meta: null,
        error: null
    }
}

function deleteProductFailure(err){
    return {
        type: DELETE_PRODUCT_FAILURE,
        payload: {
            error: err
        },
        meta: null,
        error: null
    }
}
