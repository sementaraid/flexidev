/* eslint-disable @typescript-eslint/no-explicit-any */
import {AxiosResponse, InternalAxiosRequestConfig, default as xhr} from "axios"


const axios = xhr.create({
  baseURL: "https://swapi.dev/api"
})



const axiosResponseOnFullfiled = (value: AxiosResponse<any, any>) => {
  return Promise.resolve(value.data)
}
const axiosResponseOnRejeceted = (error: any) => {
  return Promise.reject(error)
}

const axiosRequestOnFullfiled = (config: InternalAxiosRequestConfig<any>) => {
  config.headers["Content-Type"] = "application/json"
  return config
}

const axiosRequestOnRejected = (error: any) => {
  return Promise.reject(error)
}

axios.interceptors.response.use(axiosResponseOnFullfiled, axiosResponseOnRejeceted)
axios.interceptors.request.use(axiosRequestOnFullfiled, axiosRequestOnRejected)


export { axios }