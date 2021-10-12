import IUser from "../IUser"

interface IAuthResponce {
    refreshToken: string
    accessToken: string
    user: IUser
}

export default IAuthResponce