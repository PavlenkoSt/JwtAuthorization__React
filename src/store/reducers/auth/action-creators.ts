import { AuthActionTypes } from "./types"

const authActionCreators = {
    setAuth: (payload: boolean) => ({ type: AuthActionTypes.SET_AUTH, payload }) as const,
}

export default authActionCreators