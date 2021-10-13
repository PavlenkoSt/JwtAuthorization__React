import axios from 'axios'
import IAuthResponce from '../../../models/responce/IAuthResponce'
import AuthService from '../../../services/AuthService'
import { AppDispatchType } from './../../index'
import { AuthActionTypes } from "./types"

const authActionCreators = {
    setAuth: (payload: boolean) => ({ type: AuthActionTypes.SET_AUTH, payload }) as const,
    setError: (payload: string) => ({ type: AuthActionTypes.SET_ERRORS, payload }) as const,

    loginThunk: (email: string, password: string) => async (dispatch: AppDispatchType) => {
        try{
            const responce = await AuthService.login(email, password)
            
            if (responce.status === 200) {
                localStorage.setItem('token', responce.data.accessToken)
                dispatch(authActionCreators.setAuth(true))
                return
            }

        } catch (e: any) {
            console.log(e.message)
            dispatch(authActionCreators.setError('Неверная почта или пароль'))
        }
    },

    registerThunk: (email: string, password: string) => async (dispatch: AppDispatchType) => {
        try{
            const responce = await AuthService.register(email, password)
            
            if (responce.status === 200) {
                localStorage.setItem('token', responce.data.accessToken)
                dispatch(authActionCreators.setAuth(true))
                return
            }

        } catch (e: any) {
            console.log(e.message)
            dispatch(authActionCreators.setError('Неккоректная почта или пароль'))
        }
    },

    logoutThunk: () => async (dispatch: AppDispatchType) => {
        try{
            await AuthService.logout()
            localStorage.removeItem('token')
            dispatch(authActionCreators.setAuth(false))
        } catch (e: any) {
            console.log(e.message)
        }
    },

    checkAuth: () => async (dispatch: AppDispatchType) => {
        try{
            const responce = await axios.get<IAuthResponce>('http://localhost:5000/api/refresh', { withCredentials: true })

            if (responce.status === 200) {
                localStorage.setItem('token', responce.data.accessToken)
                dispatch(authActionCreators.setAuth(true))
                return
            }

        } catch (e) {
            console.log(e)
        }
    }
}

export default authActionCreators