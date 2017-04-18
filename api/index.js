const fakeDatabase = {
  users: [
    {
      id: 1,
      name: 'fancn21th'
    },
    {
      id: 2,
      name: 'yancn21th'
    }
  ]
}

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms))

export const fetchUser = () =>
  delay(2000).then(() => fakeDatabase.users)

export const login = (username, passsword, verificationCode) =>
  delay(2000).then(() => username + '_' + Date.now().toString())

export const logout = () =>
  delay(2000)
