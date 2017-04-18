export const login = (username, password, verificationCode) => (
  {
    type: 'REQUEST_LOGIN',
    username,
    password,
    verificationCode
  }
)
