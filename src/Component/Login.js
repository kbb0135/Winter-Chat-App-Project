import React from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from './firebase'
//progress 2 for email
//progess 3 for password

const Login = () => {
  const navigate = useNavigate();
  const handleEvent = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/home");
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  });
    }
    catch {

    }
  }
  return (
    <div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleEvent} className="form-login">
        <h3>Chat & Chat</h3>
        <h4>Login</h4>

        <label htmlFor="username" className="label">Email</label>
        <input className="input" type="text" placeholder="Email or Phone" id="email" />

        <label htmlFor="password" className="label">Password</label>
        <input className="input" type="password" placeholder="Password" id="password" />

        <button className="button">Log In</button>
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
export default Login;