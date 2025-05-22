import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    const sidebarLinks = [
        {
            name: 'Dashboard',
            path: '/owner',
            icon: assets.dashboardIcon
        },
        {
            name: 'Add Room',
            path: '/owner/add-room',
            icon: assets.addIcon
        },
        {
            name: 'List Room',
            path: '/owner/list-room',
            icon: assets.listIcon
        },
    ]

    return (
        <div className='md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4 flex flex-col transition-all duration-300'>
            <div className='flex flex-col gap-2 px-4'>
                {sidebarLinks.map((link, index) => (
                    <NavLink 
                        to={link.path} 
                        key={index}
                        className={({ isActive }) => 
                            `flex items-center gap-2 p-2 rounded-lg transition-all duration-300 hover:bg-gray-100 ${
                                isActive 
                                    ? 'bg-blue-50 text-blue-600' 
                                    : 'text-gray-600 hover:text-gray-900'
                            }`
                        }
                    >
                        <img src={link.icon} alt={link.name} className='w-5 h-5' />
                        <span className='hidden md:block'>{link.name}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
