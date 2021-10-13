import axios, { AxiosRequestConfig } from "axios"

const API_URL = 'http://localhost:5000/api'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config: AxiosRequestConfig) => {
    if(config.headers){
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    }
    return config
})

$api.interceptors.response.use((responce) => {
    return responce
}, async (error) => {
    console.log(error);
})

export default $api