import { createStore, applyMiddleware } from 'redux'
import {mainReducer} from './reducers/mainReducer'
import thunkMiddleware from 'redux-thunk'

export const store = createStore(mainReducer, undefined, applyMiddleware(thunkMiddleware))
