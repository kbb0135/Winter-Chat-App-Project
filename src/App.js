import {React,useContext} from 'react'
import Login from './Component/Login.js'
import Home from './Component/Home.jsx'
import {Routes, Route} from 'react-router-dom'
import SignUp from './Component/SignUp.js';
import ForgotPassword from './Component/ForgotPassword.js';
import { AuthContext } from './context/AuthContext.js';
//import {useConext} from "react"
//import './Component/style1.scss'
function App() {
  const {currentUser} = useContext(AuthContext);
  console.log(currentUser);
  return (
    <>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
    </Routes>
    </>
  )
}
export default App;
