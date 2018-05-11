import { store } from "../login-store";

export const DO_LOGIN = "DO_LOGIN";
export const CHANGE_USERNAME = "CHANGE_USERNAME";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";

export function doLogin(dispatch) {
  return () => {
    const { username, password } = store.getState();

    const token = localStorage.getItem("token");

    return fetch(`/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ username, password })
    })
      .then(response => response.json())
      .then(({ token }) => {
        window.localStorage.setItem("token", token);
      });
  };
}

export function changeUsername(dispatch) {
  return username => {
    dispatch({
      type: CHANGE_USERNAME,
      payload: username
    });
  };
}

export function changePassword(dispatch) {
  return password => {
    dispatch({
      type: CHANGE_PASSWORD,
      payload: password
    });
  };
}