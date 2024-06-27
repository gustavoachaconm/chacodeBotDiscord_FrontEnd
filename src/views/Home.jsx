import robo from "../assets/robo.png"

function Home() {
  return (
    <div className="w-full px-14 py-24">
      <div className="grid grid-cols-2 items-center justify-center px-10"> 
      <div className="text-white w-full flex flex-col">
        <p className="text-6xl font-bold italic">Haz que tu <p className="text-greenFont">Server</p> de Discrod sea mas <p className="text-greenFont">profesional</p></p>
        <div className="flex flex-row gap-4 mt-6 items-end justify-end text-2xl">
          <button className="py-3 px-4 font-bold bg-greenFont rounded-2xl ">Añadir a Discord</button>
          <button className="py-3 px-4 font-bold bg-greenFont rounded-2xl">Mas información</button>
        </div>
      </div>
      <div className="flex justify-center">
        <img
         src={robo}
         className="w-50 h-80"
        />
      </div>
      </div>
    </div>
  )
}

export default Home