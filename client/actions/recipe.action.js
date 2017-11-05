import { ADD_RECIPE_REQUEST, DELETE_RECIPE_REQUEST, DELETE_RECIPE_SUCCESS,
       DELETE_RECIPE_FAILURE, GET_RECIPE_REQUEST, GET_RECIPE_SUCCESS, GET_RECIPE_FAILURE } from './recipe.type'

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

export function deleteRecipe (recipeId) {
  return dispatch => {
    console.log('deletion begins')
    dispatch(deleteRecipeRequest(recipeId))

    return fetch(`/recipes/recipe/${recipeId}`, { method: 'DELETE' })
            .then(response => response.json())
            .then(recipe => dispatch(deleteRecipeSuccess(recipeId)))
            .catch(err => deleteRecipeFailure(err))
  }
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
