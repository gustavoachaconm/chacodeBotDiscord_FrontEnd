import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import Navbar from "./components/HeadFooter/Navbar"
import Footer from "./components/HeadFooter/Footer"


function App() {
  return (
    <BrowserRouter>
    <div >
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
     </Routes>
     </div>
     <Footer/>
    </BrowserRouter>
  )
}

export default App