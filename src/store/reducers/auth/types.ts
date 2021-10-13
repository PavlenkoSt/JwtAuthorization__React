export type AuthStateType = {
    auth: boolean,
    error: string,
}

export enum AuthActionTypes {
    SET_AUTH = 'SET_AUTH',
    SET_ERRORS = 'SET_ERRORS'
}

type SetAuth = {
    type: AuthActionTypes.SET_AUTH
    payload: boolean
}

type SetErrors = {
    type: AuthActionTypes.SET_ERRORS
    payload: string
}

export type AuthActionCreators = 
    SetAuth |
    SetErrors 