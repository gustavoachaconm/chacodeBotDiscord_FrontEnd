import React from 'react'
import ButtonAddDiscord from '../views/ButtonAddDiscord'

interface CardServerProps {
    guildName: string;
    guildAvatar: string;
    guildPermisions: string
}

const CardServer: React.FC<CardServerProps> = ({guildName, guildAvatar, guildPermisions}) => {
    return (
        <article className='flex items-center rounded-2xl text-blanco gap-gapCardServer p-paddingCardServer bg-grisCardServer mb-[2em]'>
            <img src={guildAvatar} alt="" className='rounded-full w-[6em]'/>
            <div className='flex flex-col gap-gapCardServerText text-left'>
                <h4 className='font-rubik font-extrabold text-2xl'>{guildName}</h4>
                <span className='font-rubik font-base text-base'>{guildPermisions}</span>
                <ButtonAddDiscord color='verde'/>
            </div>
        </article>
    )
}

export default CardServer