import { User } from '../models/User.js'
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js'

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
  res.cookie('token', token)
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

