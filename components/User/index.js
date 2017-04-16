import React, { Component, PropTypes } from 'react'

class User extends Component {

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    const { onRequestUser } = this.props
    onRequestUser()
  }

  render(){
    const { users } = this.props

    return (
      <ul>
        {
          users.map(user => (
            <li key={user.id}> {user.name } </li>
          ))
        }
      </ul>
    )
  }
}

User.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
}

export default User
