export type AuthStateType = {
    auth: boolean
}

export enum AuthActionTypes {
    SET_AUTH = 'SET_AUTH'
}

type SetAuth = {
    type: AuthActionTypes.SET_AUTH
    payload: boolean
}

export type AuthActionCreators = 
    SetAuth