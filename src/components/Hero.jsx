
import heroBot3d from "../assets/heroBot3d.png"
const Hero = () => {
  return (
    <div className="bg-[#161616]">
         <section className="flip-scale-2-hor-top container flex flex-col items-center px-6 py-12 mx-auto   lg:flex-row h-screen">
      <div className="lg:w-1/2 p-6  ">
        <h1 className="max-w-xl  text-4xl font-bold tracking-wide text-white capitalize md:text-6xl ">
          Haz que tu <span className="text-[#22BC33] "> Server </span>  de Discord sea mas <span className="text-[#22BC33] "> profesional</span> </h1>
   
        <div className="mt-6 sm:flex sm:items-center pt-6">
          <a href="#" className="bg-[#22BC33] hover:bg-[#24792e]/80 duration-300 transition-colors border-2 border-white px-6 block text-center py-3 uppercase text-sm font-bold leading-4 tracking-widest text-white rounded">
          Añadir a Discord
          </a>

          <a href="#" className="bg-[#22BC33] hover:bg-[#24792e]/80  border-2 border-white px-6 block text-center py-3 uppercase text-sm font-bold leading-4 tracking-widest text-white rounded  duration-300 transition-colors  hover:text-white  mt-4 sm:mt-0  sm:mx-4  ">
          Mas información
          </a>
        </div>
      </div>

      <div className=" h-[32rem] mt-12 lg:mt-0 w-full mx-auto  max-w-md overflow-hidden ">
        <img className=" object-contain w-full h-full " src={heroBot3d} alt="main-bot" />
      </div>
        </section>
    </div>
  )
}

export default Hero