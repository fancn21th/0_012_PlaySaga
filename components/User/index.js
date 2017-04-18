import React, { Component, PropTypes } from 'react'

class User extends Component {

  fetchData() {
    const { onRequestUser } = this.props
    onRequestUser()
  }

  render(){
    const { users } = this.props
    return (
      <div>
        <h3>User</h3>
        <hr />
        <button onClick={() => this.fetchData()}>
          Request User
        </button>
        <ul>
          {
            users.map(user => (
              <li key={user.id}> {user.name } </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

User.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onRequestUser: PropTypes.func.isRequired,
}

export default User
