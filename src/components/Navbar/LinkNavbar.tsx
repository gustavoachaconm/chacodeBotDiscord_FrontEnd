import React from 'react';
import { Link } from "react-router-dom"

interface LinkNavbarProps {
    text: string;
}

const LinkNavbar: React.FC<LinkNavbarProps> = ({text}) => {
    return(
        <Link to="" className='flex items-center h-[12vh] p-paddingLinks border-t-2 border-solid border-t-transparent border-b-2 border-solid border-b-transparent transition-all ease-in duration-10 hover:border-b-[#FFFFFF]'>{text}</Link>
    )
}

export default LinkNavbar;