import thunkMiddleware from 'redux-thunk'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { connect, Provider } from 'react-redux'

// import {RecipeResumeList} from './component/recipeResumesList'
// import {addRecipe, deleteRecipe} from './actions/recipesActions'
import {mainReducer} from './reducers/mainReducer'
import {AddCategoryProductForm} from './component/addCategoryProduct'
import {addCategoryProduct, categoryProductNameChange} from './actions/categoryProductAction'

// const steps = [{name: 'préparer'}, {name: 'faire'}]

// const completeRecipe = {
//   title: 'first recipe',
//   category: 'category',
//   products: [
//     {name: 'banana', quantity: 12, unit: 'u'},
//     {name: 'chocolate', quantity: 100, unit: 'g'}
//   ],
//   steps
// }

// const completeRecipe2 = {
//   title: 'second recipe',
//   category: 'category 2',
//   products: [
//     {name: 'caramel', quantity: 15, unit: 'u'},
//     {name: 'fraise', quantity: 150, unit: 'g'}
//   ],
//   steps: [...steps, 'manger']
// }

// fetch('/recipes/all')
// .then(response => response.json())
// .then(json => startBinding(json))

// // startBinding([completeRecipe, completeRecipe2])

// function startBinding (rec) {

//   // function reduce (state = {}, action) {
//   //   return state
//   // }

//   var store = createStore(mainReducer, {rec}, applyMiddleware(thunkMiddleware))

//   const mapStateToProps = (state) => {
//     return {
//       recipes: state.recipes,
//       categoryProduct: state.categoryProduct
//     }
//   }

//   const mapDispatchToProps = (dispatch) => {
//     return {
//       onAddRecipe2: createRecipe => event => dispatch(addRecipe(createRecipe())),
//       deleteRecipe: id => event => dispatch(deleteRecipe(id))
//     }
//   }

// /* eslint-disable */
//   const ConnectedResumes = connect(
//     mapStateToProps,
//     mapDispatchToProps
//     )(RecipeResumeList)
// /* eslint-enable */

//   ReactDOM.render(
//     <Provider store={store}>
//     <ConnectedResumes />
//     </Provider>,
//     document.getElementById('root')
//     )
// }


  // function reduce (state = {}, action) {
  //   return state
  // }

var store = createStore(mainReducer, undefined, applyMiddleware(thunkMiddleware))

const mapStateToProps = (state) => {
  return {
    categoryProduct: state.categoryProductFormName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCategoryProduct: addCategoryProduct(dispatch, store),
    categoryProductNameChange: categoryProductNameChange(dispatch)
  }
}

/* eslint-disable */
const ConnectedAddCategoryProductForm = connect(
  mapStateToProps,
  mapDispatchToProps
  )(AddCategoryProductForm)
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
  <ConnectedAddCategoryProductForm />
  </Provider>,
  document.getElementById('root')
  )
