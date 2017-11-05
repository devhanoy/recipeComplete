import { combineReducers } from 'redux'

import { categoryProduct, categoryProductFormName } from './category-product.reducer'
import { products, productFormChange } from './product.reducer'
import { recipes } from './recipe.reducer'

export const mainReducer = combineReducers({
  recipes,
  products,
  productFormChange,
  categoryProduct,
  categoryProductFormName
})

