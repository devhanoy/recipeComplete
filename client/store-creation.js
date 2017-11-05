import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import {mainReducer} from './reducers'

export const store = createStore(mainReducer, applyMiddleware(logger, thunkMiddleware))
