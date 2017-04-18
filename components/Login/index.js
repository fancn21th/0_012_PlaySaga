import React, { Component, PropTypes } from 'react'

class Login extends Component {

  login = () => {
    const { onLogin } = this.props
    if(this.nameField.value && this.passwordField.value && this.verificationCodeField.value){
      onLogin(this.nameField.value, this.passwordField.value, this.verificationCodeField.value)
    }
  }

  logout = () => {
    const { onLogout } = this.props
    onLogout()
  }

  render(){
    const { token } = this.props
    const loginMsg = token ? <p> You have login as { token }</p> : ''

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
        <br/>
        <button onClick={this.login}>
          Login
        </button>
        <button onClick={this.logout}>
          Logout
        </button>
        {loginMsg}
      </div>
    )
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired
}

export default Login
