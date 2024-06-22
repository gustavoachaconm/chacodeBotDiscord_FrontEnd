import React from 'react';

const ButtonAddDiscord: React.FC = () => {
  return (
    <button className='h-[3em] w-[13em] bg-[#111111] text-white rounded-2xl p-[0.6em_1em] px-10 max-sm:px-2 transition-all ease-in duration-90 hover:bg-[#FFFFFF] hover:text-[#22BC33]'>
      <a className='flex flex-row gap-6 items-center justify-center font-bold' href="">
        <h1 className="max-sm:hidden">Añadir a discord</h1>
      </a>
    </button>
  );
}

export default ButtonAddDiscord;