import { UsersStateType, UsersActionCreators, UsersActionTypes } from './types';

const initialState: UsersStateType = {
    users: []
}

const usersReducer = (state = initialState, action: UsersActionCreators) => {
    switch(action.type){
        case UsersActionTypes.SET_USERS: 
            return { ...state, users: action.payload }

        default: 
            return state
    }
}

export default usersReducer