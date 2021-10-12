import { AuthStateType, AuthActionCreators, AuthActionTypes } from './types';

const initialState: AuthStateType = {
    auth: false
}

const authReducer = (state = initialState, action: AuthActionCreators) => {
    switch(action.type){
        case AuthActionTypes.SET_AUTH: 
            return { ...state, auth: action.payload }
        default: 
            return state
    }
}

export default authReducer