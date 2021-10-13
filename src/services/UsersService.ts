import API from '../API'
import IUser from '../models/IUser'

class UsersService {
    static async getAllUsers () {
        return API.get<IUser[]>('/users')
    }
}

export default UsersService