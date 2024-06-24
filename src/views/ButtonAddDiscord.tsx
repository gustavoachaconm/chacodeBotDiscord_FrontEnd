import React from 'react';
import { IconBrandDiscordFilled } from '@tabler/icons-react';

const ButtonAddDiscord: React.FC = () => {
  return (
    <button className='h-[3em] w-[12em] bg-negro text-white rounded-2xl transition-all ease-in duration-90 hover:bg-blanco hover:text-verde p-paddingAddDiscordButton'>
      <a className='flex items-center justify-around w-[100%] font-bold' href="">
        <h1 className="">Añadir a discord</h1>
        <IconBrandDiscordFilled size={32} />
      </a>
    </button>
  );
}

export default ButtonAddDiscord;