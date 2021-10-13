import API from '../API'
import IUser from '../models/IUser'

class UsersService {
    static async getAllUsers () {
        return API.get<{ users: IUser[]}>('/users')
    }
}

export default UsersService