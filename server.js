import express from 'express'
import { PORT } from './config'

const app = express()

const startApp = () => {
  app.listen(PORT, () => console.info(`success server port:${PORT}`))
}

startApp()
