import React, { useState } from "react";
import logo from "../assets/BotLogo.png";

import {
  Navbar,
 
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,

  IconButton,
  Collapse,
} from "@material-tailwind/react";
import {
  
  
  Cog6ToothIcon,

  ArrowLeftStartOnRectangleIcon,
  ServerIcon,
  GlobeAltIcon,

} from "@heroicons/react/24/solid";

// profile menu component
const profileMenuItems = [

  {
    label: "Mis servidores",
    icon: ServerIcon,
  },
  {
    label: "Idioma",
    icon: GlobeAltIcon,
  },
  {
    label: "Soporte",
    icon: Cog6ToothIcon,
  },
  {
    label: "Documentacion",
    icon: Cog6ToothIcon,
  },
 
 
];
 
function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
    const closeMenu = () => setIsMenuOpen(false);
  
    const handleSignOut = () => {
      // Aquí debes implementar la lógica para cerrar sesión
      console.log("Cerrar sesión");
    };
    const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300 `;
    return (
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button 
            variant="text"
            color="blue-gray"
            className="flex flex-r items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          >
            <Avatar
              variant="circular"
              size="md"
              alt="Usuario"
              className="border border-gray-900 p-0.5"
              src="data:image/png;base64,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" 
            />
               <div>
        <button
      className="flex flex-col h-12 w-12  rounded justify-center items-center group"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
            </button>
     
    </div>
          </Button>
        </MenuHandler>
        <MenuList className="p-1 border-2 border-green-800 min-w-60 bg-[#01A300] top-[84px] ">
        <div className="flex content-center justify-items-center ">

<Typography
        placeholder={""}
          as="a"
          href="/home-movies"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-black text-black text-2xl flex items-center border-b-[1px] border-gray-100"
          
        >
          <img src={logo} width={85} height={85}  />
          ChaCodeBot
  </Typography>
 

</div>

          {profileMenuItems.map(({ label, icon }, key) => {
            
            return (
              <MenuItem
                key={key}
                onClick={closeMenu}
                className={`flex justify-end  items-center gap-2 rounded ${""}`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 text-white `,
                  strokeWidth: 3,
                })}
                <Typography
                  as="span"
                  variant="h6"
                  className="font-bold pr-7"
                  color={ "white"}
                >
                  {label}
                </Typography>
              </MenuItem>
            );
          })}
          
          {/* Aquí está el botón "sign out" */}
          <button onClick={handleSignOut} className="w-full text-left">
            <MenuItem
              onClick={closeMenu}
              className="flex justify-end items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
            >
              <ArrowLeftStartOnRectangleIcon className="h-6 w-6 text-red-500" />
              <Typography
                as="span"
                variant="h6"
                className="font-bold pr-7 text-red-500 "
              >
                Cerrar Sesion
              </Typography>
            </MenuItem>
          </button>
          
        </MenuList>
      </Menu>
    );
  }
 
// nav list menu

 
// const navListItems = [
//   {
//     label: "Inicio",
//     Url:"#"
//   },
//   {
//     label: "comandos",
//     Url:"#"
//   },
//   {
//     label: "soporte",
//     Url:"#"
//   },

// ];
 
// function NavList() {
//   return (
//     <ul className="mt-2 mb-4 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
       
//       {/* <NavListMenu /> */}
//       {navListItems.map(({ label, Url }, key) => (
        
//         <Typography 
//         placeholder={""}
//           key={key}
//           as="a"
//           href={Url}
//           variant="small"
//           color="white"
//           className="font-medium text-blue-gray-500"
//         >
//           <MenuItem placeholder={""} className="flex items-center gap-2 lg:rounded-full text-white">
           
//             <span className="text-white font-bold text-lg"> {label}</span>
//           </MenuItem>
//         </Typography>
//       ))}
//     </ul>
//   );
// }
 
export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
 
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);
  
  
 
  return (
    <Navbar placeholder={""} className="rounded-none mx-auto max-w-none p-2  lg:pl-6 bg-[#01A300] " color="transparent">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">

        <div className="flex content-center justify-items-center ">

        <Typography
                placeholder={""}
                  as="a"
                  href="/home-movies"
                  className="mr-4 ml-2 cursor-pointer py-1.5 font-black text-black text-2xl flex items-center"
                  
                >
                  <img src={logo} width={85} height={85}  />
                  ChaCodeBot
          </Typography>
         

        </div>

        
        <IconButton
        placeholder={""}
          size="sm"
          color="white"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
       
        </IconButton>
      <div className=" flex">
         <div className="hidden lg:flex ">
            {/* <NavList /> */}
          </div>
        <Button placeholder={""} size="sm" variant="text">
            <span className="text-white hidden md:flex"> name user  </span>
          </Button>
        <ProfileMenu />

      </div>
       
      </div>
      <Collapse open={isNavOpen} className="">
        {/* <NavList /> */}
      </Collapse>
    </Navbar>
  );
}

