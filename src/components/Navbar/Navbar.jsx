import logo from "../../assets/Red and Black Modern Blockchain Technology Logo Display 1.svg"
import { Link } from "react-router-dom"
import LoginButton from "../../views/LoginButton"


function Navbar() {
  return (
    <div className="flex px-10 py-8 justify-between items-center bg-greenFont max-sm:px-6">

      <Link to={"/"} className="flex flex-row items-center justify-center font-extrabold text-4xl italic gap-2">
      <img src={logo} className="w-20 max-sm:w-16"/>
      <h1 className=" max-sm:hidden ">ChacodeBot</h1>
      </Link>
      <ul className="flex gap-5 list-none text-white font-extrabold text-2xl max-sm:justify-between max-sm:gap-2 max-sm:text-xs">
        <Link to={"/"}>
         Inicio
        </Link>

        <a>Comandos</a>
        <a>Soporte</a>
      </ul>

        <LoginButton/>

    </div>
  )
}

export default Navbar