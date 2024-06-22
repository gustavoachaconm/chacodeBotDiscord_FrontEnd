import React from 'react';
import CardServer from '../components/CardServer';

const Dashboard: React.FC = () => {
    interface guilds {
      guildName: string;
      guildAvatar: string;
      guildPermisions: string;
    }
    interface User {
      name: string;
      avatar: string;
      guilds: guilds[];
    }
    const user = {
        user:{
          name:"asdasdasd",
          avatar:"https:///asdasdasdasdasd.png"
        },
        guilds:[
          {
            guildName: "Nombre servidor 1",
            guildAvatar: "https://asdasdasdasdasd.png",
            guildPermisions: "Administrador"
          
          },
          {
            guildName: "Nombre servidor 2",
            guildAvatar: "https://asdasdasdasdasd.png",
            guildPermisions: "Moderador"
          
          },
          {
            guildName: "Nombre servidor 2",
            guildAvatar: "https://asdasdasdasdasd.png",
            guildPermisions: "Moderador"
          
          },
        ] 
    }

    return(
        <main className='bg-[#052E0B] text-center text-[#FFFFFF] flex flex-col justify-between p-paddingDashboard gap-gapMainDashboard'>
            <h2 className='font-rubik font-extrabold text-4xl'>Selecciona un servidor</h2>
            <article className='flex flex-wrap items-center gap-gapCardServer justify-center'>
                {user.guilds.map((guild, index) => (
                    <CardServer
                        key={index}
                        guildName={guild.guildName}
                        guildAvatar={guild.guildAvatar}
                        guildPermisions={guild.guildPermisions}
                    />
                ))}
            </article>
        </main>
    )
}

export default Dashboard;