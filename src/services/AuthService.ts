import { AxiosResponse } from 'axios'
import API from '../API'
import IAuthResponse from '../models/response/IAuthResponse'

class AuthService {
    static async login (email: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
        return API.post<IAuthResponse>('/login', { email, password })
    }

    static async register (email: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
        return API.post<IAuthResponse>('/registration', { email, password })
    }

    static async logout (): Promise<void> {
        return API.post('/logout')
    }
}

export default AuthService