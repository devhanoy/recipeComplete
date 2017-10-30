import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { BrowserRouter as Router, Route} from 'react-router-dom'
import { ConnectedAddCategoryProductForm } from './component/addCategoryProduct'
import { ConnectedRecipeCategoryProductListForm } from './component/recipe-category-product-list'
import { Header } from './header'

// import {RecipeResumeList} from './component/recipeResumesList'
// import {addRecipe, deleteRecipe} from './actions/recipesActions'
import { store } from './store-creation'

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/recipes">
      <div>
        <Header></Header>
        <Route exact path="/" component={ConnectedAddCategoryProductForm}/>
        <Route path="/categories" component={ConnectedRecipeCategoryProductListForm}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
  )
