import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import './styles/styles.scss'

function App() {
  return (
 <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
 </>
  );  
}

export default App;
