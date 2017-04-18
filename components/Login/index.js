import React, { Component, PropsType } from 'react'

class Login extends Component {

  render(){
    return (
      <div>
        <h3>Login</h3>
        <hr />
        username :
        <input
          type="text"
          ref={(input) => {this.nameField = input}}
        />
        <br/>
        password :
        <input
          type="password"
          ref={(input) => {this.passwordField = input}}
        />
        <br/>
        verification code :
        <input
          type="text"
          ref={(input) => {this.verificationCodeField = input}}
        />
        <button>
          Send Verification Code
        </button>
      </div>
    )
  }
}

export default Login
