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

const fetchUser = (url) => {
  delay(2000).then(() => {
    return fakeDatabase.users
  })
}
