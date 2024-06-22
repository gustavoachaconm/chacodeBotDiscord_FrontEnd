import React from 'react';
import logo from "../../assets/displayLogo.svg"
import ButtonLogin from "../../views/ButtonLogin.tsx"
import LinkNavbar from './LinkNavbar.tsx';

const Navbar: React.FC = () => {
  return (
    <header className="flex items-center justify-around p-headerPadding bg-[#01A300] h-[12vh]">
      <a href="/" className='flex items-center'>
        <img src={logo} alt="ChacodeBot Logo" className='w-20'/>
        <span className='font-inter font-extrabold italic text-xl'>ChacodeBot</span>
      </a>
      <nav className='flex items-center justify-between w-[20em] text-blancoLetra font-normal text-[1.08em] font-rubik'>
        <LinkNavbar text='Inicio' link='/'/>
        <LinkNavbar text='Comandos' link='/Dashboard'/>
        <LinkNavbar text='Soporte' link='/'/>
      </nav>
      <ButtonLogin />
    </header>
  )
}

export default Navbar