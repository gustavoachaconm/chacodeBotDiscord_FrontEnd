import example1 from "../assets/example-1.png"
import example2 from "../assets/example-2.png"
import example3 from "../assets/example-3.png"
import example4 from "../assets/example-4.png"
const Description = () => {
  return (
    <div className="bg-[#052E0B] grid gap-10 md:gap-44">
        <section className="grid grid-cols-1 md:grid-cols-2  ">
            <div className=" grid content-center justify-items-center bg-[#DCFCDF]  rounded-r-[8rem] ">
                <div className="w-[70%] m-10 grid gap-8">
                    <h2 className="font-black text-[32px] sm:text-[58px] leading-none text-[#22BC33] ">Intuitivo, Rápido y útil</h2>
                    <p className="font-semibold text-base sm:text-[26px] text-left  ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien lacus, fermentum in tellus eget, porta lobortis purus. Sed mollis cursus congue. Duis at rutrum nisl, et pulvinar diam. Sed condimentum facilisis dolor.
                    </p>
                </div>      
            </div>
            <div className="grid justify-center items-center content-center p-6 md:p-0">
                <img className="h-[220px] lg:h-[300px] relative right-6 md:right-28" src={example1} alt="" />
                <img className="h-[220px] lg:h-[300px] relative left-6 md:left-28" src={example2} alt="" />
            </div>

        </section>
        <section className="grid grid-cols-1 md:grid-cols-2  ">
           
            <div className="grid justify-center items-center content-center gap-8 p-4 md:p-0 order-2 md:order-1">
                <img className="h-[180px] lg:h-[280px] relative left-4 md:left-28" src={example3} alt="" />
                <img className="h-[180px] lg:h-[280px] relative right-4 md:right-28 " src={example4} alt="" />
            </div>
            <div className=" grid content-center justify-items-center bg-[#DCFCDF]  rounded-l-[8rem] order-1 md:order-2">
                <div className="w-[70%] m-10 grid gap-8">
                    <h2 className="font-black text-[32px] sm:text-[58px] leading-none text-[#22BC33] ">Comandos personalizados y Avanzados</h2>
                    <p className="font-semibold text-base sm:text-[26px] text-left  ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien lacus, fermentum in tellus eget, porta lobortis purus. Sed mollis cursus congue. Duis at rutrum nisl, et pulvinar diam. Sed condimentum facilisis dolor.
                    </p>
                </div>      
            </div>
        </section>

    </div>
  )
}

export default Description