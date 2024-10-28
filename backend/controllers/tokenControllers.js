import { Token } from '../models/Token.js'
import { Op } from 'sequelize'

// Función para generar un token de 6 dígitos
function generateSixDigitToken () {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

export const getTokens = async (req, res) => {
  const userId = req.query.cliente
  if (!userId) {
    return res.status(400).json({ error: 'El ID del cliente es necesario' })
  }

  try {
    const tokens = await Token.findAll({
        where: {
            userId:userId
        },
        order: [['createdAt', 'DESC']] 
    })
    res.status(200).json(tokens)
    
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

export const generateToken = async (req, res) => {
  const userId = req.query.cliente // Obtenemos el cliente (userId) de los parámetros de consulta

  if (!userId) {
    return res.status(400).json({ error: 'El ID del cliente es necesario' })
  }

  try {
    // Buscar un token activo (no expirado) para el usuario
    const existingToken = await Token.findOne({
      where: {
        userId: userId,
        expiresAt: {
          [Op.gt]: new Date() // Comprobamos que la fecha de expiración es futura
        }
      },
      order: [['createdAt', 'DESC']]
    })

    // Si existe un token activo, retornarlo
    if (existingToken) {
      return res.json({ token: existingToken })
    }

    // Si no existe un token activo, generamos uno nuevo
    const newTokenValue = generateSixDigitToken()
    const expirationTime = new Date(Date.now() + 60 * 1000) // Expira en 60 segundos

    // Crear el nuevo token en la base de datos
    const newToken = await Token.create({
      userId: userId,
      value: newTokenValue,
      expiresAt: expirationTime
    })

    // Retornar el nuevo token
    res.json({ token: newToken})
  } catch (error) {
    console.error('Error al generar o recuperar el token:', error)
    res.status(500).json({
      error: 'Error del servidor al generar o recuperar el token',
      error
    })
  }
}

export const useToken = async (req, res) => {
  try {
    // Extract user ID and token value from the request body
    const { userId, value } = req.body

    // Validate input
    if (!userId || !value) {
      return res.status(400).json({
        success: false,
        message: 'Se requiere el Id del usuario y valor del token'
      })
    }

    // Find a token associated with the user that matches the token value and has not expired
    const token = await Token.findOne({
      where: {
        userId: userId,
        value: value,
        expiresAt: {
          [Op.gt]: new Date() // Ensure token has not expired
        }
      }
    })

    // If no token is found, it means the token is either invalid or expired
    if (!token) {
      return res.status(400).json({
        success: false,
        message: 'Token invalido o caducado'
      })
    }

    // Mark the token as used
    await token.update({ usedAt: new Date() })

    // Respond with a success message
    return res.status(200).json({
      success: true,
      message: 'Transaccion exitosa'
    })
  } catch (error) {
    console.error('Error al usar el token:', error)
    return res.status(500).json({
      success: false,
      message: 'A ocurrido un error',
      error: error
    })
  }
}
