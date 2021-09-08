import User from '../models/User'

export const register = async (req, res, next) => {
  const { username, email, password } = req.body

  try {
    const user = await User.create({
      username,
      email,
      password
    })
    res.status(201).json({
      success: true,
      user
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
}

export const login = (req, res, next) => {
  res.send('login Route')
}

export const forgotpassword = (req, res, next) => {
  res.send('forgotpassword Route')
}

export const resetPassword = (req, res, next) => {
  res.send('resetPassword Route')
}
