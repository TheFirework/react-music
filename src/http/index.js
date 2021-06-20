import axios from 'axios'
import { message } from 'antd';

const TIMEOUT = 30000
const baseURL = 'https://netease-cloud-music-api-omega-lemon.vercel.app/'
const instance = axios.create({
    baseURL: baseURL,
    timeout: TIMEOUT,
    withCredentials:true,
})


instance.interceptors.request.use(handleRequest,handleRequestError)

instance.interceptors.response.use(handleResponse, handleResponseError)

function handleRequest(config){
    return config
}

function handleRequestError(error){
    return Promise.reject(error);
}

function handleResponse(response){
    return response.data;
}

function handleResponseError(error){
    const { response, message:msg } = error
    message.error(response.data.message || msg);
    return Promise.reject(response ? new Error(response.data.message || msg) : error)
}

export default instance