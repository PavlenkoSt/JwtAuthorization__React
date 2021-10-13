import { AuthStateType, AuthActionCreators, AuthActionTypes } from './types';

const initialState: AuthStateType = {
    auth: false,
    error: '',
    loading: false
}

const authReducer = (state = initialState, action: AuthActionCreators) => {
    switch(action.type){
        case AuthActionTypes.SET_AUTH: 
            return { ...state, auth: action.payload, error: '' }

        case AuthActionTypes.SET_ERRORS: 
            return { ...state, error: action.payload }

        case AuthActionTypes.SET_LOADING: 
            return { ...state, loading: action.payload }

        default: 
            return state
    }
}

export default authReducer