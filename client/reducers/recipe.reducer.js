import { combineReducers } from 'redux'

import { ADD_RECIPE, CHANGE_RECIPE_NAME, ADD_RECIPE_STEP, ADD_RECIPE_PRODUCT, CHANGE_RECIPE_PRODUCT, CHANGE_RECIPE_STEP } from '../actions/recipe.type'

export function recipes (state = {}, action) {
  var result
  switch (action.type) {
    case ADD_RECIPE:

      result = Object.assign({}, state, {
        recipes: state.recipes.push(action.payload.newRecipe)
      })
      break
    default:
      result = state
      break
  }
  return result
}

function steps (state = [], { type, payload }) {
  switch (type) {
    case ADD_RECIPE_STEP:
      return [...state, '']
    case CHANGE_RECIPE_STEP:
      const { index, step } = payload
      return [...state.slice(0, index), step, ...state.slice(index + 1)]
    default:
      return state
  }
}

function products (state = [''], { type, payload }) {
  switch (type) {
    case ADD_RECIPE_PRODUCT:
      return [...state, '']
    case CHANGE_RECIPE_PRODUCT:
      const { index, product } = payload
      return [...state.slice(0, index), product, ...state.slice(index + 1)]
    default:
      return state
  }
}

function name (state = '', { type, payload }) {
  switch (type) {
    case CHANGE_RECIPE_NAME:
      return payload
    default:
      return state
  }
}

export const recipeForm = combineReducers({
  name,
  steps,
  products
})
