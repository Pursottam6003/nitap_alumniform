import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Navigation from "./layout/Navigation";
import LayoutComponent from './layout/LayoutComponent'
import Footer from "./layout/Footer";
import Carosal from './pages/SectionCarosal'
import './styles/styles.scss'

function App() {
  return (
 <>
    <BrowserRouter>
    <LayoutComponent>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    
    </Routes>
    </LayoutComponent>
    </BrowserRouter>
 </>
  );  
}

export default App;
