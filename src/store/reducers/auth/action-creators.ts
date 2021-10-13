import axios from 'axios'
import IUser from '../../../models/IUser'
import IAuthResponse from '../../../models/response/IAuthResponse'
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
            const response = await AuthService.login(email, password)
            
            if (response.status === 200) {
                localStorage.setItem('token', response.data.accessToken)
                dispatch(authActionCreators.setAuth(true))
                dispatch(authActionCreators.setUser(response.data.user))
                return
            }

        } catch (e: any) {
            dispatch(authActionCreators.setError(e?.response?.data?.message))
        }
    },

    registerThunk: (email: string, password: string) => async (dispatch: AppDispatchType) => {
        try{
            const response = await AuthService.register(email, password)
            
            if (response.status === 200) {
                localStorage.setItem('token', response.data.accessToken)
                dispatch(authActionCreators.setAuth(true))
                dispatch(authActionCreators.setUser(response.data.user))
                return
            }

        } catch (e: any) {
            dispatch(authActionCreators.setError(e?.response?.data?.message))
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
            dispatch(authActionCreators.setError(e?.response?.data?.message))
        }
    },

    checkAuth: () => async (dispatch: AppDispatchType) => {
        dispatch(authActionCreators.setLoading(true))
        try{
            const response = await axios.get<IAuthResponse>('http://localhost:5000/api/refresh', { withCredentials: true })

            if (response.status === 200) {
                localStorage.setItem('token', response.data.accessToken)
                dispatch(authActionCreators.setAuth(true))
                dispatch(authActionCreators.setUser(response.data.user))
                return
            }

        } catch (e) {
            console.log(e);
        } finally {
            dispatch(authActionCreators.setLoading(false))
        }
    }
}

export default authActionCreators