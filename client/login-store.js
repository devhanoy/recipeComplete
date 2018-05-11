import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

import { loginReducer } from "./reducers/login.reducer";

const logger = createLogger({
  stateTransformer: state => state
});
export const store = createStore(
  loginReducer,
  applyMiddleware(logger, thunkMiddleware)
);
