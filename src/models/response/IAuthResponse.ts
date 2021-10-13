import IUser from "../IUser"

interface IAuthResponse {
    refreshToken: string
    accessToken: string
    user: IUser
}

export default IAuthResponse