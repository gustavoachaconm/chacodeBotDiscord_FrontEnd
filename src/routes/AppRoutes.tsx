import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from 'react';
import Dashboard from '../pages/Dashboard.tsx'
import FooterComponent from "../components/FooterComponent.tsx"
import Navbar from "../components/Navbar/Navbar.tsx"
import FooterAuthTrue from '../components/FooterAuthTrue/FooterAuthTrue.tsx'


const AppRoutes: React.FC = () => {

  return (
    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
      <FooterComponent />

    </BrowserRouter>
  )
}

export default AppRoutes