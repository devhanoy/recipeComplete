import { GET_ALL_UNIT_SUCCESS } from "../actions/unit.type";

export function units(state = [], action) {
  switch (action.type) {
    case GET_ALL_UNIT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
