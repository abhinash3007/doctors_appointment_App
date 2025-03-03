import React from 'react'
import "./App.css" 
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Appointment from './pages/Appointment'
import Register from './pages/Register'
import AboutUs from './pages/AboutUs'
import Login from './pages/Login'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/appointment' element={<Appointment />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/about' element={<AboutUs />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
        <ToastContainer position='top-center'/>
      </Router>
    </>
  )
}

export default App
