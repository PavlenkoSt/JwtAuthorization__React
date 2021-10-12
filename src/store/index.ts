import { applyMiddleware, createStore } from "redux"
import rootReducer from "./reducers"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunkMiddleware)
))

export type RootStateType = typeof store.getState
export type AppDispatchType = typeof store.dispatch

export default store