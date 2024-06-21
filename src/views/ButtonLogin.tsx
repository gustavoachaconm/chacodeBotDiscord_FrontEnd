import React from 'react';
import discordLogo from '../assets/discordLogo.png';

const ButtonLogin: React.FC = () => {

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault(); // Previene la acción por defecto del enlace
    const url = "https://discord.com/oauth2/authorize?client_id=1250839124466991136&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fprueba&scope=identify+email+guilds+applications.commands.permissions.update";
    window.open(url, 'newwindow', 'width=800,height=600'); // Abre una nueva ventana con dimensiones específicas
  };

  return (
    <button className='bg-[#111111] text-white rounded-2xl py-1 px-10 max-sm:px-2 w-[10em] h-[3em] transition-all ease-in duration-50 hover:bg-[#FFFFFF] hover:text-[#22BC33]'>
      <a 
      className='flex flex-row gap-6 items-center justify-center font-bold' 
      href="https://discord.com/oauth2/authorize?client_id=1250839124466991136&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fprueba&scope=identify+email+guilds+applications.commands.permissions.update"
      onClick={handleClick}>
        <h1 className="max-sm:hidden">Login</h1>
        <img src={discordLogo} className="w-10" alt="Discord Logo" />
      </a>
    </button>
  );
}

export default ButtonLogin;
