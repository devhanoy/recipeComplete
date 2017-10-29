import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ConnectedAddCategoryProductForm } from './component/addCategoryProduct'
import { ConnectedRecipeCategoryProductListForm } from './component/recipe-category-product-list'

// import {RecipeResumeList} from './component/recipeResumesList'
// import {addRecipe, deleteRecipe} from './actions/recipesActions'
import { store } from './store-creation'

ReactDOM.render(
  <Provider store={store}>
    <div>
  <ConnectedAddCategoryProductForm />
  <ConnectedRecipeCategoryProductListForm/>
  </div>
  </Provider>,
  document.getElementById('root')
  )
