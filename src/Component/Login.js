import React, { Component } from 'react'
import './style.css'
import { Link } from 'react-router-dom';
//progress 2 for email
//progess 3 for password
// progress finish for finish
function demo() {
  const firstName = document.getElementById('email');
  console.log(firstName);
}
export class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form className="form-login">
          <h3>Chat & Chat</h3>
          <h4>Login</h4>

          <label htmlFor="username">Email</label>
          <input type="text" placeholder="Email or Phone" id="email" />

          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" />

          <button onClick={demo()}>Log In</button>
          <div className="social">
            <div className="go"><i className="fab fa-google"></i>
              <Link to="/signup" className="c">Back to Sign In</Link>
            </div>
            <div className="go"><i className="fab fa-google"></i>
              <Link to="/forgotpassword" className="c">Forgot password</Link>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
export default Login;