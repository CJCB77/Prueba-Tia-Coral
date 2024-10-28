import axios from './axios'


export const registerUser = async userData => {
  const response = await axios.post(`/auth/registro`, userData)
  return response.data
}

export const loginUser = async userData => {
  const response = await axios.post(`/auth/login`, userData)
  return response.data // Will throw an error if the response is not successful
}

export const logoutUser = async () => {
  const response = await axios.post(`/auth/logout`)
  return response.data
}

export const verifyToken = async () => {
  const response = await axios.get(`/auth/verify`)
  return response.data
}
