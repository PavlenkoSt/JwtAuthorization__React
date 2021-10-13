export type AuthStateType = {
    auth: boolean,
    error: string,
    loading: boolean
}

export enum AuthActionTypes {
    SET_AUTH = 'SET_AUTH',
    SET_ERRORS = 'SET_ERRORS',
    SET_LOADING = 'SET_LOADING'
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

export type AuthActionCreators = 
    SetAuth |
    SetErrors |
    SetLoading