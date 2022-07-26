import axios, { AxiosRequestConfig } from 'axios'

export default axios.create({
    baseUrl: 'https://jsonplaceholder.typicode.com'
} as AxiosRequestConfig)