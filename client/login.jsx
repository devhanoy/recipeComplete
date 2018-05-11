import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { LoginContainer } from "./component/login";

import { store } from "./login-store";

ReactDOM.render(
  <Provider store={store}>
    <LoginContainer />
  </Provider>,
  document.getElementById("root")
);
