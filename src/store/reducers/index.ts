import { combineReducers } from "redux"
import authReducer from "./auth"

const rootReducer = combineReducers({
    authReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>

export default rootReducer