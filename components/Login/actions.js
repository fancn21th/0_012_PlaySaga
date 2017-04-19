export const login = (username, password, verificationCode) => ({
  type: 'LOGIN_REQUEST',
  username,
  password,
  verificationCode
})

export const logout = () => ({
  type: 'LOGOUT_REQUEST'
})
