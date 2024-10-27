import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
//Middlewares
app.use(cors())
app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT || 3000

const server = async () => {
    try {
      // await sequelize.authenticate()
      // if(process.env.NODE_ENV !== 'production'){
      //     await sequelize.sync({ force: true })
      // }
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
      })
    } catch (error) {
      console.log('Unable to start the server: ', error)
    }
  }
  
  server()