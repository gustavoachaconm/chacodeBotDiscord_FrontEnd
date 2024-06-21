import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar.tsx"
import FooterComponent from "../components/FooterComponent.tsx"
import React from 'react';
import Home from "../views/Home.jsx"


const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <FooterComponent />
      
    </BrowserRouter>
  )
}

export default AppRoutes