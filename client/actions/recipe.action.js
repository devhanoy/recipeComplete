import { ADD_RECIPE_REQUEST, DELETE_RECIPE_REQUEST, DELETE_RECIPE_SUCCESS,
       DELETE_RECIPE_FAILURE, GET_RECIPE_REQUEST, GET_RECIPE_SUCCESS, GET_RECIPE_FAILURE,
      ADD_RECIPE_PRODUCT, ADD_RECIPE_STEP, CHANGE_RECIPE_NAME, CHANGE_RECIPE_PRODUCT, CHANGE_RECIPE_STEP } from './recipe.type'

export function addRecipe (recipe) {
  return {
    type: ADD_RECIPE_REQUEST,
    payload: {
      newRecipe: recipe
    },
    meta: null,
    error: null
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
    console.log('deletion begins')
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
  return (product, index) => dispatch({
    type: CHANGE_RECIPE_PRODUCT,
    payload: {
      product,
      index
    }
  })
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

// export function getRecipe (recipeId) {
//   return {
//     type: ADD_RECIPE,
//     payload: {
//       newRecipe: recipe
//     },
//     meta: null,
//     error: null
//   }
// }
