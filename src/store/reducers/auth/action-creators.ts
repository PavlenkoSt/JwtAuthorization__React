import AuthService from '../../../services/AuthService'
import { AppDispatchType } from './../../index'
import { AuthActionTypes } from "./types"

const authActionCreators = {
    setAuth: (payload: boolean) => ({ type: AuthActionTypes.SET_AUTH, payload }) as const,
    setError: (payload: string) => ({ type: AuthActionTypes.SET_ERRORS, payload }) as const,

    loginThunk: (email: string, password: string) => async (dispatch: AppDispatchType) => {
        try{
            const responce = await AuthService.login(email, password)
            
            if (responce.status == 200) {
                localStorage.setItem('token', responce.data.accessToken)
                dispatch(authActionCreators.setAuth(true))
                return
            }

        } catch (e: any) {
            console.log(e.message)
            dispatch(authActionCreators.setError('Неверная почта или пароль'))
        }
    }
}

export default authActionCreators