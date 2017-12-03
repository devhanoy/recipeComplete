import { ADD_RECIPE_REQUEST,
  DELETE_RECIPE_REQUEST, DELETE_RECIPE_SUCCESS, DELETE_RECIPE_FAILURE,
  GET_RECIPE_REQUEST, GET_RECIPE_SUCCESS, GET_RECIPE_FAILURE,
  GET_ALL_RECIPES_REQUEST, GET_ALL_RECIPES_SUCCESS, GET_ALL_RECIPES_FAILURE,
  ADD_RECIPE_PRODUCT, ADD_RECIPE_STEP, CHANGE_RECIPE_NAME,
  CHANGE_RECIPE_PRODUCT, CHANGE_RECIPE_STEP, CHANGE_RECIPE_PRODUCT_QUANTITY,
  CHANGE_RECIPE_PRODUCT_UNIT, ADD_RECIPE_SUCCESS } from './recipe.type'
import { store } from '../store-creation'
import { jsonPost } from '../helpers/requestHelper'

export function addRecipe (dispatch) {
  return () => {
    const recipe = store.getState().recipeForm
    const products = recipe.products.map(p => ({ productId: p.product._id, quantity: p.quantity, unitId: p.unitId || null }))
    const nRecipes = Object.assign({}, recipe, {products})
    jsonPost('/recipes/recipe/add', nRecipes)
      .then(recipe => {
        dispatch({
          type: ADD_RECIPE_SUCCESS,
          payload: recipe
        })
      })
    dispatch({
      type: ADD_RECIPE_REQUEST,
      payload: {
        newRecipe: recipe
      },
      meta: null,
      error: null
    })
  }
}

function deleteRecipeRequest (id) {
  return {
    type: DELETE_RECIPE_REQUEST,
    payload: {
      id
    },
    meta: null,
    error: null
  }
}

function deleteRecipeSuccess (id) {
  return {
    type: DELETE_RECIPE_SUCCESS,
    payload: {
      id
    },
    meta: null,
    error: null
  }
}

function deleteRecipeFailure (error) {
  return {
    type: DELETE_RECIPE_FAILURE,
    payload: {
      error
    },
    meta: null,
    error: null
  }
}

export function deleteRecipe (dispatch) {
  return recipeId => {
    dispatch(deleteRecipeRequest(recipeId))

    return fetch(`/recipes/recipe/${recipeId}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(recipe => dispatch(deleteRecipeSuccess(recipeId)))
      .catch(err => deleteRecipeFailure(err))
  }
}

export function addStep (dispatch) {
  return () => dispatch({
    type: ADD_RECIPE_STEP
  })
}

export function addProduct (dispatch) {
  return () => dispatch({
    type: ADD_RECIPE_PRODUCT
  })
}

export function changeProduct (dispatch) {
  return (productName, index) => {
    const product = store.getState().products.find(p => p.name === productName) || { name: productName }
    dispatch({
      type: CHANGE_RECIPE_PRODUCT,
      payload: {
        product,
        index
      }
    })
  }
}

export function changeQuantity (dispatch) {
  return (quantity, index) => {
    dispatch({
      type: CHANGE_RECIPE_PRODUCT_QUANTITY,
      payload: {
        quantity,
        index
      }
    })
  }
}

export function changeUnit (dispatch) {
  return (unitId, index) => {
    dispatch({
      type: CHANGE_RECIPE_PRODUCT_UNIT,
      payload: {
        unitId,
        index
      }
    })
  }
}

export function changeStep (dispatch) {
  return (step, index) => dispatch({
    type: CHANGE_RECIPE_STEP,
    payload: {
      step,
      index
    }
  })
}

export function changeName (dispatch) {
  return (name) => dispatch({
    type: CHANGE_RECIPE_NAME,
    payload: name
  })
}

export const getRecipe = dispatch => recipeId => {
  dispatch({
    type: GET_RECIPE_REQUEST
  })

  return fetch(`/recipes/recipe/${recipeId}`)
    .then(response => response.json())
    .then(recipe => dispatch({
      type: GET_RECIPE_SUCCESS,
      payload: recipe
    }))
    .catch(error => dispatch({
      type: GET_RECIPE_FAILURE,
      error
    }))
}

export const getAllRecipes = dispatch => () => {
  dispatch({
    type: GET_ALL_RECIPES_REQUEST
  })

  return fetch(`/recipes/all`)
    .then(response => response.json())
    .then(recipes => dispatch({
      type: GET_ALL_RECIPES_SUCCESS,
      payload: recipes
    }))
    .catch(error => dispatch({
      type: GET_ALL_RECIPES_FAILURE,
      error
    }))
}
