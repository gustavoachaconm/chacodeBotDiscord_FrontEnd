import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar.tsx"
import FooterComponent from "../components/FooterComponent.tsx"
import React from 'react';
import Description from "../components/Description.jsx"
import Hero from "../components/Hero.jsx"


const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      <FooterComponent />
      
    </BrowserRouter>
  )
}

export default AppRoutes