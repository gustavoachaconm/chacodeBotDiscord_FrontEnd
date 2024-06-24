import React from 'react'

interface dividerProps {
    textDivider: string;
}
const DividerDashboardAside: React.FC<dividerProps> = ({textDivider}) =>{
    return (
        <div>
            {textDivider}
            <span></span>
        </div>
    )
}