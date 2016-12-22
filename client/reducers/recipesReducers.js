import { ADD_RECIPE } from '../actions/actionTypes'

export function mainReducer (state, action) {
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
