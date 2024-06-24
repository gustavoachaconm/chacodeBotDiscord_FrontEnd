import React from 'react';
import logo from "../assets/BotLogo.png"
import ButtonLogin from "../views/ButtonLogin.tsx"

const Navbar: React.FC = () => {
  return (
    <header className="flex items-center justify-between bg-negro p-headerPadding h-[12vh] outline-1 outline-gris outline">
      <a href="/" className='flex items-center'>
        <img src={logo} alt="ChacodeBot Logo" className='w-20'/>
        <span className='font-inter font-extrabold italic text-xl text-blanco'>ChacodeBot</span>  
      </a>
      <ButtonLogin />
    </header>
  )
}

export default Navbar