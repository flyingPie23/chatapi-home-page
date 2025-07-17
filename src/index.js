import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from 'react';

import './index.css';
import App from './pages/App';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Nav from './components/Nav'
import reportWebVitals from './reportWebVitals';

const isLoged = () =>{

  fetch("http://localhost:3000/me", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${localStorage.jwt}`
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message && data.message === "Please log in") {
        console.log("1")
        console.log(data)

        localStorage.removeItem("jwt")
        localStorage.setItem("loged", false)


      } else {
        console.log("2")
        console.log(data)

        localStorage.setItem("loged", true)
      }
    })
}

isLoged()




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Nav/>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
