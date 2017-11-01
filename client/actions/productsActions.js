import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, GET_ALL_PRODUCTS } from './actionTypes'
import {jsonPost} from '../helpers/requestHelper'

import { store } from '../store-creation'

export function addProduct (product) {
  return dispatch => {
    dispatch(addProductRequest(product))

    return jsonPost(`/recipes/product/`, product)
                .then(response => response.json())
                .then(product => dispatch(addProductSuccess(product)))
                .catch(err => addProductFailure(err))
  }
}

function addProductRequest (product) {
  return {
    type: ADD_PRODUCT_REQUEST,
    payload: {
      product
    },
    meta: null,
    error: null
  }
}

function addProductSuccess (product) {
  return {
    type: ADD_PRODUCT_SUCCESS,
    payload: {
      product
    },
    meta: null,
    error: null
  }
}

function addProductFailure (err) {
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

function deleteProductRequest (product) {
  return {
    type: DELETE_PRODUCT_REQUEST,
    payload: {
      product
    },
    meta: null,
    error: null
  }
}

function deleteProductSuccess (product) {
  return {
    type: DELETE_PRODUCT_SUCCESS,
    payload: {
      product
    },
    meta: null,
    error: null
  }
}

function deleteProductFailure (err) {
  return {
    type: DELETE_PRODUCT_FAILURE,
    payload: {
      error: err
    },
    meta: null,
    error: null
  }
}

export function getAllProducts (dispatch) {
  return () => {
    const productsList = store.getState().products
    if (!productsList.length) {
      fetch('/recipes/product/all', {method: 'GET'})
                .then(response => response.json())
                .then(products => dispatch({
                  type: GET_ALL_PRODUCTS,
                  payload: products,
                  meta: null,
                  error: null
                }))
    }
  }
}
