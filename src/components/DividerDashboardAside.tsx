import React from 'react'

interface dividerProps {
    textDivider: string;
}
const DividerDashboardAside: React.FC<dividerProps> = ({textDivider}) =>{
    return (
        <div className="flex items-center justify-center my-4">
            <span className="text-blanco text-base font-rubik font-normal">{textDivider}</span>
            <div className="flex-1 border-t border-gray-300 ml-4"></div>
        </div>
    )
}
export default DividerDashboardAside;