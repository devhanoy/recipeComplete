import { combineReducers } from "redux";
import { CHANGE_PASSWORD, CHANGE_USERNAME } from "../actions/login.action";

export function username(state = "", { type, payload }) {
  return type === CHANGE_USERNAME ? payload : state;
}

export function password(state = "", { type, payload }) {
  return type === CHANGE_PASSWORD ? payload : state;
}

export const loginReducer = combineReducers({
  username,
  password
});
