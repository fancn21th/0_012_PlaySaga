export const login = (username, password, verificationCode) => ({
  type: 'REQUEST_LOGIN',
  username,
  password,
  verificationCode
})

export const logout = () => ({
  type: 'REQUEST_LOGOUT'
})
