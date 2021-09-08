import express from 'express'
import { PORT } from './config'
import router from './routes/auth'
import connectDB from './config/db'

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/auth', router)

const startApp = () => {
  app.listen(PORT, () => console.info(`success server port:${PORT}`))
}

startApp()
