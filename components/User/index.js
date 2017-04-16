import React, { Component, PropTypes } from 'react'

const User = ({ user }) => (
  <ul>
    {
      user.users.map(user => (
        <li> {user.name } </li>
      ))
    }
  </ul>
)


User.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
}

export default User
