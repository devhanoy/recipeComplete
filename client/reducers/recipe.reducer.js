import { combineReducers } from "redux";

import {
  ADD_RECIPE_SUCCESS,
  CHANGE_RECIPE_NAME,
  ADD_RECIPE_STEP,
  ADD_RECIPE_PRODUCT,
  CHANGE_RECIPE_PRODUCT,
  CHANGE_RECIPE_PRODUCT_QUANTITY,
  CHANGE_RECIPE_PRODUCT_UNIT,
  CHANGE_RECIPE_STEP,
  GET_ALL_RECIPES_SUCCESS,
  GET_RECIPE_SUCCESS
} from "../actions/recipe.type";

export function selectedRecipe(state = {}, action) {
  return action.type === GET_RECIPE_SUCCESS ? action.payload : state;
}

export function recipes(state = [], action) {
  switch (action.type) {
    case ADD_RECIPE_SUCCESS:
      return [...state, action.payload];
    case GET_ALL_RECIPES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

function steps(state = [], { type, payload }) {
  switch (type) {
    case ADD_RECIPE_STEP:
      return [...state, ""];
    case CHANGE_RECIPE_STEP:
      const { index, step } = payload;
      return [...state.slice(0, index), step, ...state.slice(index + 1)];
    case ADD_RECIPE_SUCCESS:
      return [];
    default:
      return state;
  }
}

const baseProduct = { name: "" };
const baseCompleteProduct = {
  product: baseProduct,
  quantity: "",
  unitId: ""
};
function products(state = [baseCompleteProduct], { type, payload }) {
  switch (type) {
    case ADD_RECIPE_PRODUCT:
      return [...state, baseCompleteProduct];
    case CHANGE_RECIPE_PRODUCT:
      const { product } = payload;
      return assignElemAt(state, { product }, payload.index);
    case CHANGE_RECIPE_PRODUCT_QUANTITY:
      const { quantity } = payload;
      return assignElemAt(state, { quantity }, payload.index);
    case CHANGE_RECIPE_PRODUCT_UNIT:
      const { unitId } = payload;
      return assignElemAt(state, { unitId }, payload.index);
    case ADD_RECIPE_SUCCESS:
      return [baseCompleteProduct];
    default:
      return state;
  }
}

function assignElemAt(previousList, newProp, index) {
  const newElem = Object.assign({}, previousList[index], newProp);
  return changeElemAt(previousList, newElem, index);
}

function changeElemAt(previousList, newElem, index) {
  return [
    ...previousList.slice(0, index),
    newElem,
    ...previousList.slice(index + 1)
  ];
}

function title(state = "", { type, payload }) {
  switch (type) {
    case CHANGE_RECIPE_NAME:
      return payload;
    case ADD_RECIPE_SUCCESS:
      return "";
    default:
      return state;
  }
}

export const recipeForm = combineReducers({
  title,
  steps,
  products
});
