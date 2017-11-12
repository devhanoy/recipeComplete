import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS,
         DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS,
         GET_ALL_PRODUCTS,
        CHANGE_FORM_PRODUCT_CATEGORY, CHANGE_FORM_PRODUCT_NAME } from './product.type'
import {jsonPost} from '../helpers/requestHelper'

import { store } from '../store-creation'

export function addProduct (dispatch) {
  return () => {
    const state = store.getState()
    const product = state.productFormChange
    const categories = state.categoryProduct

    const category = categories.find(cat => product.category === cat.name)
    const newProduct = Object.assign({}, product, { categoryId: category._id })

    dispatch(addProductRequest(newProduct))

    return jsonPost(`/recipes/product/`, newProduct)
                .then(product => dispatch(addProductSuccess(product)))
                .catch(err => dispatch(addProductFailure(err)))
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

export function deleteProduct (dispatch) {
  return product => {
    dispatch(deleteProductRequest(product))

    return fetch(`/recipes/product/${product._id}`, { method: 'DELETE' })
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

export function changeFormName (dispatch) {
  return (newName) => {
    dispatch({
      type: CHANGE_FORM_PRODUCT_NAME,
      payload: newName
    })
  }
}

export function changeFormCategory (dispatch) {
  return (newCategoryName) => {
    dispatch({
      type: CHANGE_FORM_PRODUCT_CATEGORY,
      payload: newCategoryName
    })
  }
}
