import React, { useState } from "react";
import logo from "../../assets/BotLogo.png";

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
  ArrowLeftOnRectangleIcon,
  ServerIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const handleSignOut = () => {
    // Implement logout logic here
    console.log("Cerrar sesión");
  };

  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex flex-row items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="md"
            alt="Usuario"
            className="border border-gray-900 p-0.5"
            src="data:image/png;base64,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"
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${isLastItem ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10" : ""
                }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""
                  }`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
        <MenuItem
          key="Cerrar sesión"
          onClick={handleSignOut}
          className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
        >
          <ArrowLeftOnRectangleIcon
            className="h-4 w-4 text-red-500"
            strokeWidth={2}
          />
          <Typography
            as="span"
            variant="small"
            className="font-normal"
            color="red"
          >
            Cerrar sesión
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default function ComplexNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <Navbar className="mx-auto max-w-full py-2 px-4 lg:px-8 lg:py-4">
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <Typography
          as={"a"}
          href={"/"}
          className={"mr-4 ml-2 cursor-pointer py-1.5 font-medium"}
        >
          <img src={logo} className="h-16" />
        </Typography>
        <div className="hidden lg:block">{/* add navbar items here */}</div>
        <div className="hidden lg:block">
          <ProfileMenu />
        </div>
        <div className="lg:hidden ml-auto">
          <IconButton
            variant="text"
            className="h-8 w-8 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
            ripple={false}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${isOpen
                ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
                }`}
            />
            <div
              className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                }`}
            />
            <div
              className={`${genericHamburgerLine} ${isOpen
                ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
                }`}
            />
          </IconButton>
        </div>
      </div>
      <Collapse open={isOpen}>
        <div className="flex flex-col py-2 lg:hidden">
          <ProfileMenu />
        </div>
      </Collapse>
    </Navbar>
  );
}
