import {
  GET_ALL_UNIT_FAILURE,
  GET_ALL_UNIT_REQUEST,
  GET_ALL_UNIT_SUCCESS
} from "./unit.type";

import { store } from "../store-creation";
import { get } from "../helpers/requestHelper";

export function getAllUnits(dispatch) {
  return () => {
    const units = store.getState().units;
    if (units.length) {
      return;
    }
    dispatch({ type: GET_ALL_UNIT_REQUEST });
    get("/api/recipes/units/all")
      .then(units =>
        dispatch({
          type: GET_ALL_UNIT_SUCCESS,
          payload: units,
          meta: null,
          error: null
        })
      )
      .catch(error =>
        dispatch({
          type: GET_ALL_UNIT_FAILURE,
          error
        })
      );
  };
}
