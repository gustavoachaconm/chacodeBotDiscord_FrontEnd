import React from 'react';
import { IconBrandDiscordFilled } from '@tabler/icons-react';

const ButtonLogin: React.FC = () => {

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault(); // Previene la acción por defecto del enlace
    const url = "https://discord.com/oauth2/authorize?client_id=1250839124466991136&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fprueba&scope=identify+email+guilds+applications.commands.permissions.update";
    window.open(url, 'newwindow', 'width=800,height=600'); // Abre una nueva ventana con dimensiones específicas
  };

  return (
    <button className='bg-verde text-white rounded-2xl w-[8em] h-[2.8 em] p-paddingButtonLogin transition-all ease-in duration-50 hover:bg-blanco hover:text-verde'>
      <a 
      className='flex flex-row items-center justify-around font-bold' 
      href="https://discord.com/oauth2/authorize?client_id=1250839124466991136&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fprueba&scope=identify+email+guilds+applications.commands.permissions.update"
      onClick={handleClick}>
        <h1 className="">Login</h1>
        <IconBrandDiscordFilled size={32} />
      </a>
    </button>
  );
}

export default ButtonLogin;
