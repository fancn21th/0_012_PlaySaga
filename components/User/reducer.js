export default function user(state = { users: []}, action) {
  switch (action.type) {
    case 'RECIEVE_USER':
      return Object.assign({}, state, { users: action.users })
    default:
      return state
  }
}
