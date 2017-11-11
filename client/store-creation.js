import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import {mainReducer} from './reducers'

const logger = createLogger({
  stateTransformer: state => state.recipeForm.products
})
export const store = createStore(mainReducer, applyMiddleware(logger, thunkMiddleware))
