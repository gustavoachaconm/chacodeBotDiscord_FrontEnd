import React from 'react'
import './ScrollBar.css'
import DashboardIconLink from '../components/DashboardIconLink'
import DividerDashboardAside from '../components/DividerDashboardAside'
import * as icon from '../docs/icons.js'

const AsideDashboard: React.FC = () => {
    return (
        <aside className='w-[30%] asideScroll flex flex-col text-blanco h-[88vh] overflow-y-auto p-paddingAsideDashboard'>
            <DashboardIconLink icon={<icon.IconLayoutDashboard />} route='/' >Dashboard</DashboardIconLink>
            <DashboardIconLink icon={<icon.IconSettings2 />} route='/' >Settings</DashboardIconLink>
            <DashboardIconLink icon={<icon.IconBrandMyOppo />} route='/' >Upgrade to premiun</DashboardIconLink>

            {/*Separador o divider dashboard*/}
            <DividerDashboardAside textDivider='Bassics' />

            <DashboardIconLink icon={<icon.IconHandStop />} route='/' >Welcome</DashboardIconLink>
            <DashboardIconLink icon={<icon.IconHandOff />} route='/' >Goodbye</DashboardIconLink>
            <DashboardIconLink icon={<icon.IconAntenna />} route='/' >Welcome channel</DashboardIconLink>   

            {/*Separador o divider dashboard*/}
            <DividerDashboardAside textDivider='Moderation' />

            <DashboardIconLink icon={<icon.IconBrandHipchat />} route='/' >Chat</DashboardIconLink>
            <DashboardIconLink icon={<icon.IconMicrophone />} route='/' >Voz</DashboardIconLink>
            <DashboardIconLink icon={<icon.IconTerminal2 />} route='/' >Commands</DashboardIconLink>
            <DashboardIconLink icon={<icon.IconHeadset />} route='/' >Audit logs</DashboardIconLink>
            <DashboardIconLink icon={<icon.IconTicket />} route='/' >Support tickets</DashboardIconLink>

            {/*Separador o divider dashboard*/}
            <DividerDashboardAside textDivider='Utilities' />

            <DashboardIconLink icon={<icon.IconPool />} route='/' >Pools</DashboardIconLink>
            <DashboardIconLink icon={<icon.IconMessage />} route='/' >Embed messages</DashboardIconLink>
            <DashboardIconLink icon={<icon.IconBellRinging />} route='/' >Reminders</DashboardIconLink>

            {/*Separador o divider dashboard*/}
            <DividerDashboardAside textDivider='Social alerts' />

            <DashboardIconLink icon={<icon.IconBrandYoutube />} route='/' >YouTube alerts</DashboardIconLink>
            <DashboardIconLink icon={<icon.IconBrandTwitch />} route='/' >Twitch alerts</DashboardIconLink>
            <DashboardIconLink icon={<icon.IconBrandTiktok />} route='/' >TikTok alerts</DashboardIconLink>
            <DashboardIconLink icon={<icon.IconBrandX />} route='/' >X alerts</DashboardIconLink>
            <DashboardIconLink icon={<icon.IconBrandInstagram />} route='/' >Instagram alerts</DashboardIconLink>

            {/*Separador o divider dashboard*/}
            <DividerDashboardAside textDivider='Estadistics' />

            <DashboardIconLink icon={<icon.IconShare />} route='/' >Invite tracker</DashboardIconLink>
            <DashboardIconLink icon={<icon.IconChartBar />} route='/' >Estadistics guild</DashboardIconLink>
        </aside>
    )
}

export default AsideDashboard;