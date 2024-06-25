import { Outlet} from "react-router-dom"
import React from 'react'
import AsideDashboard from '../layouts/AsideDashboard'
import '../layouts/ScrollBar.css'
import DashboardLayout from '../layouts/DashboardLayout'
import PremiunLayout from '../layouts/PremiunLayout'


const PaneldeControl: React.FC = () => {
    return(
        <main className='pageScroll w-[100%] flex h-[88vh] bg-negro border-none rounded-none'>
            <AsideDashboard />
            <Outlet />
        </main>
    )
}
export default PaneldeControl;