import axios from './axios'

export const getTokens = async (userId) => {
    const response = await axios.get(`/api/tokens`, {
        params:{
            cliente:userId
        }
    })
    return response.data
}

export const generateToken = async (userId) => {
    const response = await axios.get(`/api/generarToken`, {
        params:{
            cliente:userId
        }
    })
    return response.data
}