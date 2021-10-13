import IUser from "../../../models/IUser"

export type AuthStateType = {
    auth: boolean,
    error: string,
    loading: boolean,
    userData: IUser
}

export enum AuthActionTypes {
    SET_AUTH = 'SET_AUTH',
    SET_ERRORS = 'SET_ERRORS',
    SET_LOADING = 'SET_LOADING',
    SET_USER = 'SET_USER'
}

type SetAuth = {
    type: AuthActionTypes.SET_AUTH
    payload: boolean
}

type SetErrors = {
    type: AuthActionTypes.SET_ERRORS
    payload: string
}

type SetLoading = {
    type: AuthActionTypes.SET_LOADING
    payload: boolean
}

type SetUser = {
    type: AuthActionTypes.SET_USER
    payload: IUser
}

export type AuthActionCreators = 
    SetAuth |
    SetErrors |
    SetLoading |
    SetUser