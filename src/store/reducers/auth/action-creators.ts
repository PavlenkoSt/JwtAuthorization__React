import axios from 'axios'
import IUser from '../../../models/IUser'
import IAuthResponce from '../../../models/responce/IAuthResponce'
import AuthService from '../../../services/AuthService'
import usersActionCreators from '../users/action-creators'
import { AppDispatchType } from './../../index'
import { AuthActionTypes } from "./types"

const authActionCreators = {
    setAuth: (payload: boolean) => ({ type: AuthActionTypes.SET_AUTH, payload }) as const,
    setError: (payload: string) => ({ type: AuthActionTypes.SET_ERRORS, payload }) as const,
    setLoading: (payload: boolean) => ({ type: AuthActionTypes.SET_LOADING, payload }) as const,
    setUser: (payload: IUser) => ({ type: AuthActionTypes.SET_USER, payload }) as const,

    loginThunk: (email: string, password: string) => async (dispatch: AppDispatchType) => {
        try{
            const responce = await AuthService.login(email, password)
            
            if (responce.status === 200) {
                localStorage.setItem('token', responce.data.accessToken)
                dispatch(authActionCreators.setAuth(true))
                dispatch(authActionCreators.setUser(responce.data.user))
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
                dispatch(authActionCreators.setUser(responce.data.user))
                return
            }

        } catch (e: any) {
            console.dir(e.message)
            dispatch(authActionCreators.setError('Неккоректная почта или пароль'))
        }
    },

    logoutThunk: () => async (dispatch: AppDispatchType) => {
        try{
            await AuthService.logout()
            localStorage.removeItem('token')
            dispatch(authActionCreators.setAuth(false))
            dispatch(authActionCreators.setUser({} as IUser))
            dispatch(usersActionCreators.setUsers([] as IUser[]))
        } catch (e: any) {
            console.log(e.message)
        }
    },

    checkAuth: () => async (dispatch: AppDispatchType) => {
        dispatch(authActionCreators.setLoading(true))
        try{
            const responce = await axios.get<IAuthResponce>('http://localhost:5000/api/refresh', { withCredentials: true })

            if (responce.status === 200) {
                localStorage.setItem('token', responce.data.accessToken)
                dispatch(authActionCreators.setAuth(true))
                dispatch(authActionCreators.setUser(responce.data.user))
                return
            }

        } catch (e) {
            console.log(e)
        } finally {
            dispatch(authActionCreators.setLoading(false))
        }
    }
}

export default authActionCreators