import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Navbar from './Components/Navbar/Navbar'
import Dashboard from './Components/Dashboard/Dashboard'
import Footer from "./Components/Footer/Footer";
import UploadImages from "./pages/uploadImages";
import Home from "./Components/Home/Home";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path="/upload" element={<UploadImages/>} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App
