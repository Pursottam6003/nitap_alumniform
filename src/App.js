import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import LayoutComponent from './layout/LayoutComponent'
import Form from './pages/Form'
import Pin from './pages/Pin'

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
    <Route path="/form" element={<Form /> } />
    <Route path="/pincode" element={<Pin/>} />
    
    </Routes>
    </LayoutComponent>
    </BrowserRouter>
 </>
  );  
}

export default App;
