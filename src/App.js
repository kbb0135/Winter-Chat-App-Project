import { React, useContext } from 'react'
import Login from './Component/Login.js'
import Home from './Component/Home.jsx'
import { Routes, Route, Navigate } from 'react-router-dom'
import SignUp from './Component/SignUp.js';
import ForgotPassword from './Component/ForgotPassword.js';
import { AuthContext } from './context/AuthContext.js';
import './Component/style1.scss'
function App() {
  const { currentUser } = useContext(AuthContext);
  const ProtectRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/" />
    }
    return children
  }
  console.log(currentUser);
  return (
    <>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/home"
          element={
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          } />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </>
  )
}
export default App;
