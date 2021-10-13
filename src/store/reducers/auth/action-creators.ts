import { AppDispatchType } from './../../index'
import { AuthActionTypes } from "./types"

const authActionCreators = {
    setAuth: (payload: boolean) => ({ type: AuthActionTypes.SET_AUTH, payload }) as const,

    loginThunk: (email: string, password: string) => (dispatch: AppDispatchType) => {
        try{
            
            dispatch(authActionCreators.setAuth(true))
        } catch (e) {
            console.log(e)
        }
    }
}

export default authActionCreators