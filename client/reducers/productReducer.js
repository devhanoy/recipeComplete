import { ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS, GET_ALL_PRODUCTS, CHANGE_FORM_PRODUCT_CATEGORY, CHANGE_FORM_PRODUCT_NAME } from '../actions/actionTypes'

export function products (state = [], action) {
  switch (action.type) {
    case ADD_PRODUCT_SUCCESS:
      return [...state, action.payload.product]
    case DELETE_PRODUCT_SUCCESS:
      return state.filter(p => p.id !== action.payload.product.id)
    case GET_ALL_PRODUCTS:
      return action.payload
    default:
      return state
  }
}

const productFormInitialState = { name: '', category: null }

export function productFormChange (state = productFormInitialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_SUCCESS:
      return productFormInitialState
    case CHANGE_FORM_PRODUCT_CATEGORY:
      return Object.assign({}, state, { category: action.payload })
    case CHANGE_FORM_PRODUCT_NAME:
      return Object.assign({}, state, { name: action.payload })
    default:
      return state
  }
}

