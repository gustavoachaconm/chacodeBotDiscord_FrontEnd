import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar.tsx"
import FooterComponent from "../components/FooterComponent.tsx"
import React from 'react';
import Homepage from '../pages/HomePage.tsx'


const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <FooterComponent />
      
    </BrowserRouter>
  )
}

export default AppRoutes