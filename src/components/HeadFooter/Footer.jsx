import { Link } from "react-router-dom"
import logo from "../../assets/BotLogo-removebg-preview 2.png"

export default function Footer() {
    return (
        <div className=' text-slate-200 bg-[#01A300] flex flex-col items-center gap-5 px-20 py-20 max-sm:py-10 max-sm:px-4 max-sm:gap-0' id="footer">
          <div className="w-full grid grid-cols-2 gap-20 max-sm:gap-2 ">
            <div className="flex flex-col items-start gap-2 w-60">
                <Link to={"/"} className="flex flex-row items-center"> 
                <img
                 src={logo}
                 className="w-20 max-sm:w-16"
                />
<h1 className=" text-black font-extrabold text-2xl max-sm:hidden italic ">ChacodeBot</h1>
</Link>
               <p className="max-sm:text-xs text-xl ">El mejor bot para hacer tu Discord más profesional</p>
               <div className="flex flex-row gap-2">
               </div>
            </div>
            <div className="flex flex-col items-end gap-2 ml-14 text-end text-white  ">
               <h2 className=" text-xl max-sm:text-xs">Ver mas información del bot</h2>
               <ul className="flex flex-col items-end gap-6">
                 <li className="list-none text-2xl mb-2.5 max-sm:text-xs">Soporte</li>
                 <li className="list-none mb-2.5  ">
                    <p className=" font-bold text-2xl pb-4 max-sm:pb-2 max-sm:text-xs"> Copyright © {new Date().getFullYear()} - Todos los derechos reservados </p>
                    </li>
               </ul>
            </div>
          </div>

        </div>
      )
    }