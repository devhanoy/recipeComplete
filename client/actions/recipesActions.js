import { ADD_RECIPE } from './actionTypes'

export function addRecipe (recipe) {
  return {
    type: ADD_RECIPE,
    payload: {
      newRecipe: recipe
    },
    meta: null,
    error: null
  }
}
