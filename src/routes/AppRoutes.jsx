import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar.tsx"
import FooterComponent from "../components/FooterComponent.tsx"
import Home from "../views/Home"


function AppRoutes() {
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