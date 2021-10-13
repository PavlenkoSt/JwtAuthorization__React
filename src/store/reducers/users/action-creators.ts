import { AppDispatchType } from './../../index'
import IUser from '../../../models/IUser'
import { UsersActionTypes } from './types'
import UsersService from '../../../services/UsersService'


const usersActionCreators = {
    setUsers: (payload: IUser[]) => ({ type: UsersActionTypes.SET_USERS, payload }) as const,

    setUsersThunk: () => async (dispatch: AppDispatchType) => {
        try{
            const response = await UsersService.getAllUsers()

            if(response.status === 200){
                dispatch(usersActionCreators.setUsers(response.data.users))
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export default usersActionCreators