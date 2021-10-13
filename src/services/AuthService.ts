import { AxiosResponse } from 'axios'
import API from '../API'
import IAuthResponce from '../models/responce/IAuthResponce'

class AuthService {
    static async login (email: string, password: string): Promise<AxiosResponse<IAuthResponce>> {
        return API.post<IAuthResponce>('/login', { email, password })
    }

    static async register (email: string, password: string): Promise<AxiosResponse<IAuthResponce>> {
        return API.post<IAuthResponce>('/register', { email, password })
    }

    static async logout (): Promise<void> {
        return API.post('/logout')
    }
}

export default AuthService