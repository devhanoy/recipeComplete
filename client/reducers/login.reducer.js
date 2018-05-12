import { combineReducers } from "redux";
import {
  CHANGE_PASSWORD,
  CHANGE_USERNAME,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  DO_LOGIN
} from "../actions/login.action";

function username(state = "", { type, payload }) {
  return type === CHANGE_USERNAME ? payload : state;
}

function password(state = "", { type, payload }) {
  switch (type) {
    case CHANGE_PASSWORD:
      return payload;
    case LOGIN_FAIL:
    case LOGIN_SUCCESS:
      return "";
    default:
      return state;
  }
}

function error(state = "", { type, payload }) {
  switch (type) {
    case DO_LOGIN:
      return "";
    case LOGIN_FAIL:
      return "Nom d'utilisateur / mot de passe incorrect";
    default:
      return state;
  }
}

export const loginReducer = combineReducers({
  username,
  password,
  error
});
