import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Navbar from './Components/Navbar/Navbar'
import Footer from "./Components/Footer/Footer";
import UploadImages from "./pages/uploadImages";
import Home from "./Components/Home/Home";
import ImageEditor from "./pages/ImageEditor";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/imageeditor' element={<ImageEditor />} />
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
