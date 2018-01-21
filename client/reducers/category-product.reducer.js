import {
  ADD_CATEGORY_PRODUCT_SUCCESS,
  DELETE_CATEGORY_PRODUCT_SUCCESS,
  CHANGE_NAME_FORM_CATEGORY,
  GET_ALL_CATEGORY_PRODUCT
} from "../actions/category-product.type";

export function categoryProduct(state = [], action) {
  switch (action.type) {
    case ADD_CATEGORY_PRODUCT_SUCCESS:
      return [...state, action.payload.categoryproduct];
    case DELETE_CATEGORY_PRODUCT_SUCCESS:
      return state.filter(p => p.id !== action.payload.categoryproduct.id);
    case GET_ALL_CATEGORY_PRODUCT:
      return action.payload;
    default:
      return state;
  }
}

export function categoryProductFormName(state = "", action) {
  switch (action.type) {
    case ADD_CATEGORY_PRODUCT_SUCCESS:
      return "";
    case CHANGE_NAME_FORM_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}
