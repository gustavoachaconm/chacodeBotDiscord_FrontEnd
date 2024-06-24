import React from 'react'
import './ScrollBar.css'
import DashboardIconLink from '..//components/DashboardIconLink'
import {IconLayoutDashboardFilled, IconSettingsFilled, IconBrandMyOppo} from '@tabler/icons-react'

const AsideDashboard: React.FC = () => {
    return (
        <aside className='w-[30%] asideScroll flex flex-col text-blanco h-[88vh] overflow-y-auto'>
            <DashboardIconLink icon={<IconLayoutDashboardFilled />} route='/' >
                Dashboard
            </DashboardIconLink>

            <DashboardIconLink icon={<IconSettingsFilled />} route='/' >
                Settings
            </DashboardIconLink>

            <DashboardIconLink icon={<IconBrandMyOppo />} route='/' >
                Upgradeto premiun
            </DashboardIconLink>

        </aside>
    )
}

export default AsideDashboard;