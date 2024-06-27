import {  Outlet } from "react-router-dom"
import Navbar from "../components/HeadFooter/Navbar"


function AppLayout() {
  return (
    <> 
    <Navbar/>
    <main className="container mx-auto py-16">
      <Outlet/>
    </main>

    </>
    
  )
}

export default AppLayout