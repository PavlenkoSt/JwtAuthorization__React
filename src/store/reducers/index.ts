import { combineReducers } from "redux"
import authReducer from "./auth"
import usersReducer from './users'

const rootReducer = combineReducers({
    authReducer,
    usersReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>

export default rootReducer