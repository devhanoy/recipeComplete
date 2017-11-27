import { GET_ALL_UNIT_FAILURE, GET_ALL_UNIT_REQUEST, GET_ALL_UNIT_SUCCESS } from './unit.type'

import { store } from '../store-creation'

export function getAllUnits (dispatch) {
  return () => {
    const units = store.getState().units
    if (units.length) {
      return
    }
    dispatch({ type: GET_ALL_UNIT_REQUEST })
    fetch('/recipes/units/all', {method: 'GET'})
      .then(response => response.json())
      .then(units => dispatch({
        type: GET_ALL_UNIT_SUCCESS,
        payload: units,
        meta: null,
        error: null
      }))
      .catch(error => dispatch({
        type: GET_ALL_UNIT_FAILURE,
        error
      }))
  }
}
