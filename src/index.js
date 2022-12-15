import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Check from "./Component/check.js";
//import Greet from './Component/helloWorld.js';
//import Menu from './Component/menu.js'
import Login from './Component/Login.js'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* /* <Menu />
    <Greet name = "karan">
      <button>Action</button>
      </Greet>
    <Check name = "Bibek"></Check> */}
    <Login />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
