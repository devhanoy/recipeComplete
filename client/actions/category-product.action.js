import { ADD_CATEGORY_PRODUCT_SUCCESS, DELETE_CATEGORY_PRODUCT_SUCCESS, ADD_CATEGORY_PRODUCT_FAILURE,
  ADD_CATEGORY_PRODUCT_REQUEST, DELETE_CATEGORY_PRODUCT_FAILURE, DELETE_CATEGORY_PRODUCT_REQUEST,
  CHANGE_NAME_FORM_CATEGORY, GET_ALL_CATEGORY_PRODUCT } from './category-product.type'
import {jsonPost} from '../helpers/requestHelper'

import { store } from '../store-creation'

export function addCategoryProduct (dispatch) {
  return () => {
    const categoryproduct = store.getState().categoryProductFormName
    dispatch(addCategoryProductRequest(categoryproduct))

    return jsonPost(`/recipes/categoryProduct/add`, {categoryproduct})
      .then(categoryproduct => dispatch(addCategoryProductSuccess(categoryproduct)))
      .catch(err => addCategoryProductFailure(err))
  }
}

function addCategoryProductRequest (categoryproduct) {
  return {
    type: ADD_CATEGORY_PRODUCT_REQUEST,
    payload: {
      categoryproduct
    },
    meta: null,
    error: null
  }
}

function addCategoryProductSuccess (categoryproduct) {
  return {
    type: ADD_CATEGORY_PRODUCT_SUCCESS,
    payload: {
      categoryproduct
    },
    meta: null,
    error: null
  }
}

function addCategoryProductFailure (err) {
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

function deleteCategoryProductRequest (categoryproduct) {
  return {
    type: DELETE_CATEGORY_PRODUCT_REQUEST,
    payload: {
      categoryproduct
    },
    meta: null,
    error: null
  }
}

function deleteCategoryProductSuccess (categoryproduct) {
  return {
    type: DELETE_CATEGORY_PRODUCT_SUCCESS,
    payload: {
      categoryproduct
    },
    meta: null,
    error: null
  }
}

function deleteCategoryProductFailure (err) {
  return {
    type: DELETE_CATEGORY_PRODUCT_FAILURE,
    payload: {
      error: err
    },
    meta: null,
    error: null
  }
}

export function categoryProductNameChange (dispatch) {
  return name => {
    dispatch({
      type: CHANGE_NAME_FORM_CATEGORY,
      payload: name,
      meta: null,
      error: null
    })
  }
}

export function getAllCategories (dispatch) {
  return () => {
    const categoryProductList = store.getState().categoryProduct
    if (!categoryProductList.length) {
      fetch('/recipes/categoryProduct/all', {method: 'GET'})
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
