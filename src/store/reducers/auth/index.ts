import IUser from '../../../models/IUser';
import { AuthStateType, AuthActionCreators, AuthActionTypes } from './types';

const initialState: AuthStateType = {
    auth: false,
    error: '',
    loading: false,
    userData: {} as IUser
}

const authReducer = (state = initialState, action: AuthActionCreators) => {
    switch(action.type){
        case AuthActionTypes.SET_AUTH: 
            return { ...state, auth: action.payload, error: '' }

        case AuthActionTypes.SET_ERRORS: 
            return { ...state, error: action.payload }

        case AuthActionTypes.SET_LOADING: 
            return { ...state, loading: action.payload }

        case AuthActionTypes.SET_USER: 
            return { ...state, userData: action.payload }

        default: 
            return state
    }
}

export default authReducer