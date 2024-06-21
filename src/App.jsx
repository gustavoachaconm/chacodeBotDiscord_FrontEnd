import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./views/Home"


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App