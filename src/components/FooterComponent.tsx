import React from 'react';
import botLogo from '../assets/BotLogo.png';
import ButtonAddDiscord from '../views/ButtonAddDiscord';
import ButtonLogin from '../views/ButtonLogin';

const FooterComponent: React.FC = () => {
  return (
    <footer className="bg-[#01A300] flex flex-wrap items-center justify-around p-4em-0em">
      <div className='flex flex-col gap-4'>
        <a href="/" className='flex items-center'>
          <img src={botLogo} alt="ChacodeBot Logo" className='w-24'/>
          <span className='font-inter font-extrabold italic text-xl'>ChacodeBot</span>
        </a>
        <p className='text-[#FFFFFF] max-w-xs'>El mejor bot para hacer tu Discord más profesional</p>
        <ButtonAddDiscord />
      </div>
      <div className='flex flex-col items-end gap-4'>
        <ButtonLogin />
        <a href='/' className='list-none text-[#FFFFFF]'>Ver más información del bot</a>
        <a href='/' className='list-none text-[#FFFFFF]'>Soporte</a>
        <span className='text-right text-[#FFFFFF]'>Copyright © 2024 - Todos los derechos reservados</span>
      </div>
    </footer>
  );
}

export default FooterComponent;
