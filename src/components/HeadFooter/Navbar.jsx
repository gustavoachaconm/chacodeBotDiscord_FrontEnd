import logo from "../../assets/BotLogo-removebg-preview 2.png"
import { Link } from "react-router-dom";
import LoginButton from "../../views/LoginButton";


export default function Navbar() {
  return (
    <div>
            <header className="flex px-10 py-8 justify-between items-center bg-neutral-900 max-sm:px-6 border-b border-zinc-500">

<Link to={"/"} className="flex flex-row items-center justify-center font-extrabold text-4xl italic gap-2">
<img src={logo} className="w-20 max-sm:w-16"/>
<h1 className=" max-sm:hidden text-white ">ChacodeBot</h1>
</Link>
  <LoginButton/>
</header>
    </div>
  )
}
