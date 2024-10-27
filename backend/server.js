import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import { sequelize } from './db/db.js'
import './models/User.js'
import './models/Token.js'

dotenv.config()

const app = express()
//Middlewares
app.use(cors())
app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT || 3000

const server = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
    // await sequelize.sync({ force: true })
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (error) {
    console.log('Unable to start the server: ', error)
  }
}

server()
