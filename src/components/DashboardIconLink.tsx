import React, { ReactNode  } from 'react'
import { Link } from 'react-router-dom';

interface DashboardIconLinkProps {
    icon: React.ReactNode; 
    children: ReactNode;
    route: string;
}

const DashboardIconLink: React.FC<DashboardIconLinkProps> = ({icon, children, route}) => {
    return(
        <Link to={route} className='flex items-center font-rubik'>
            {icon}
            {children}
        </Link>
    )
}
export default DashboardIconLink;