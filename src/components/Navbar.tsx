import React from 'react';
import logo from "../assets/displayLogo.svg"
import { Link } from "react-router-dom"
import ButtonLogin from "../views/ButtonLogin.tsx"

const Navbar: React.FC = () => {
  return (
    <header className="">
      <div>
        <img src={logo} alt="" />
        <span>ChacodeBot</span>
      </div>
      <nav>
        <a href="">Inicio</a>
        <a href="">Comandos</a>
        <a href="">Soporte</a>
      </nav>
    </header>
  )
}

export default Navbar