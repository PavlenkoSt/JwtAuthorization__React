import { AxiosResponse } from 'axios'
import API from '../API'
import IAuthResponce from '../models/responce/IAuthResponce'

class AuthService {
    static async login (email: string, password: string): Promise<AxiosResponse<IAuthResponce>> {
        return API.post<IAuthResponce>('/login', { email, password })
    }
}

export default AuthService