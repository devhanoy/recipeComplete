import { combineReducers } from 'redux'

import { categoryProduct, categoryProductFormName } from './categoryProductReducer'
import { products, productFormChange } from './productReducer'
import { recipes } from './recipesReducers'

export const mainReducer = combineReducers({
  recipes,
  products,
  productFormChange,
  categoryProduct,
  categoryProductFormName
})

