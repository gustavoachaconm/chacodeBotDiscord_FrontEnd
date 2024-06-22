import React from 'react';
import botLogo from '../../assets/BotLogo.png';
import { Link } from 'react-router-dom';

const FooterComponent: React.FC = () => {
  return (
    <footer className="bg-[#01A300] flex flex-wrap items-center justify-around p-footerPadding">

      <div className='flex flex-col gap-3'>
        <a href="/" className='flex items-center'>
          <img src={botLogo} alt="ChacodeBot Logo" className='w-20'/>
          <span className='font-inter font-extrabold italic text-xl'>ChacodeBot</span>
        </a>
        <p className='text-blancoLetra max-w-xs'>El mejor bot para hacer tu Discord más profesional</p>
      </div>

      <div className='flex flex-col items-end gap-3 text-blancoLetra'>
        <Link to='/' className='list-none '>Ver más información del bot</Link>
        <Link to='/' className='list-none '>Soporte</Link>
        <span className='text-right'>Copyright © 2024 - Todos los derechos reservados</span>
      </div>
      
    </footer>
  );
}

export default FooterComponent;
