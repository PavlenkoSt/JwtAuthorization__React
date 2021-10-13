import IUser from "../../../models/IUser"

export type UsersStateType = {
    users: IUser[]
}

export enum UsersActionTypes {
    SET_USERS = 'SET_USERS'
}

type SetUsers = {
    type: UsersActionTypes.SET_USERS
    payload: IUser[]
}

export type UsersActionCreators = 
    SetUsers
    