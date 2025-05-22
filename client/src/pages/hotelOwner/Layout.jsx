import React from 'react'
import Navbar from '../../components/hotelOwner/Navbar'
import Sidebar from '../../components/hotelOwner/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <div className='flex-1 flex flex-col overflow-hidden'>
        <Navbar />
        <div className='flex-1 p-4 md:p-6 overflow-y-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
