import React, { ReactNode  } from 'react'
import { Link } from 'react-router-dom';

interface DashboardIconLinkProps {
    icon: React.ReactNode; 
    children: ReactNode;
    route: string;
}

const DashboardIconLink: React.FC<DashboardIconLinkProps> = ({icon, children, route}) => {
    return(
        <Link to={route} className='flex items-center gap-10 font-rubik text-letraGris hover:bg-grisOpacity08 p-paddingLinkAside rounded-lg'>
            {icon}
            {children}
        </Link>
    )
}
export default DashboardIconLink;