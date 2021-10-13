import { AppDispatchType } from './../../index'
import IUser from '../../../models/IUser'
import { UsersActionTypes } from './types'


const usersActionCreators = {
    setUsers: (payload: IUser) => ({ type: UsersActionTypes.SET_USERS, payload }) as const,

    setUsersThunk: () => (dispatch: AppDispatchType) => {
        try{
             
        } catch (e) {
            console.log(e)
        }
    }
}

export default usersActionCreators