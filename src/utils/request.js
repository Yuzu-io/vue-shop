import axios from 'axios'
import store from '../store'

export function request (config) {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    if (store.state.user.token) {
      config.headers.Authorization = `Bearer ${store.state.user.token}`
    }
    return config
  }, err => {
    console.log(err)
  })
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })

  return instance(config)
}
