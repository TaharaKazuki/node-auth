import express from 'express'

const app = express()

const startApp = () => {
  app.listen('4000', () => console.info('success server'))
}

startApp()
