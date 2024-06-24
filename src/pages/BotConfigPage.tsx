import React from 'react'
import AsideDashboard from '../layouts/AsideDashboard'
import '../layouts/ScrollBar.css'
import DashboardLayout from '../layouts/DashboardLayout'


const BotConfigPage: React.FC = () => {
    return(
        <main className='pageScroll w-[100%] flex h-[88vh] bg-negro border-none rounded-none'>
            <AsideDashboard />
            <DashboardLayout />
        </main>
    )
}
export default BotConfigPage;