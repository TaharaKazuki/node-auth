import express, { Router } from 'express'
const router = Router()
import {
  register,
  login,
  forgotpassword,
  resetPassword
} from '../controllers/auth'

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/forgotpassword').post(forgotpassword)
router.route('/resetPassword/:resetToken').post(resetPassword)

export default router
