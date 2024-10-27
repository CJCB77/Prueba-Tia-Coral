import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import { sequelize } from './db/db.js'

import authRoutes from './routes/authRoutes.js'
import tokenRoutes from './routes/tokenRoutes.js'

dotenv.config()

const app = express()
//Middlewares
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

//Routes
app.use('/auth', authRoutes)
app.use('/api', tokenRoutes)

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
