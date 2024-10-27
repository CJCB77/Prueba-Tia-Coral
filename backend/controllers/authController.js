import { User } from '../models/User.js'
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const login = async (req, res) => {
  const { email, password } = req.body
  const userFound = await User.findOne({ where: { email } })
  if (!userFound) {
    return res.status(401).json({ message: ['Usuario no encontrado'] })
  }
  const passwd_matches = await bcrypt.compare(password, userFound.password)
  if (!passwd_matches) {
    return res.status(401).json({ message: ['Correo o contraseña incorrecta'] })
  }
  const token = await createAccessToken({
    id: userFound.id
  })
  res.cookie('token', token, {
    sameSite: 'none',
    secure: true,
    httpOnly: false
  })
  res.status(200).json({
    id: userFound.id,
    email: userFound.email
  })
}

export const register = async (req, res) => {
  const { email, password } = req.body
  // Validate if the user already exists
  const user = await User.findOne({ where: { email } })
  if (user) {
    return res.status(400).json({ message: ['Ya existe ese usuario'] })
  }
  const hashedPasswd = await bcrypt.hash(password, 10)
  try {
    const newUser = await User.create({
      email,
      password: hashedPasswd
    })

    const token = await createAccessToken({
      id: newUser.id
    })
    res.cookie('token', token)
    res.status(200).json({
      id: newUser.id,
      email: newUser.email,
    })
  } catch (error) {
    res
      .status(500)
      .json({ message: [error.message]})
  }
}

export const verifyToken = async (req, res) => {
  const { token } = req.cookies

  if (!token) {
    return res.status(401).json({ message: ['No hay token'] })
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) {
      return res.status(401).json({ message: ['Token invalido'] })
    }

    const userFound = await User.findByPk(user.id)
    if (!userFound) {
      return res.status(401).json({ message: ['Usuario no encontrado'] })
    }

    return res.status(200).json({
      id: userFound.id,
      email: userFound.email
    })
    
  })
}