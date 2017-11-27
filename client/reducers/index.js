import { combineReducers } from 'redux'

import { categoryProduct, categoryProductFormName } from './category-product.reducer'
import { products, productFormChange } from './product.reducer'
import { recipes, recipeForm } from './recipe.reducer'
import { units } from './unit.reducer'

export const mainReducer = combineReducers({
  recipes,
  recipeForm,
  products,
  productFormChange,
  categoryProduct,
  categoryProductFormName,
  units
})
