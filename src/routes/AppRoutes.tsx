import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from 'react';
import MyServers from '../pages/MyServers.tsx'
import FooterComponent from "../components/FooterComponent.tsx"
import Navbar from "../components/Navbar.tsx"
import PaneldeControl from "../pages/PaneldeControl.tsx";
import DashboardLayout from "../layouts/DashboardLayout.tsx";
import PremiunLayout from "../layouts/PremiunLayout.tsx";

const AppRoutes: React.FC = () => {

  return (
    <BrowserRouter>

      <Navbar />
      <Routes>

        <Route path="/myservers" element={<MyServers />} />
        <Route path="/mypanel" element={<PaneldeControl />}>
          <Route path="dashboard" element={<DashboardLayout />} />
          <Route path="premiun" element={<PremiunLayout />} />
        </Route>

      </Routes>
      {/* <FooterComponent />*/}

    </BrowserRouter>
  )
}

export default AppRoutes