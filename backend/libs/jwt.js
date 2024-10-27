import dotevn from 'dotenv'
import jwt from 'jsonwebtoken'

dotevn.config()

export function createAccessToken (payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '24h' },
      (err, token) => {
        if (err) reject(err)
        resolve(token)
      }
    )
  })
}
