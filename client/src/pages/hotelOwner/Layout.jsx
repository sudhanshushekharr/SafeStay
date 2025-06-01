import React from 'react'
import Navbar from '../../components/hotelOwner/Navbar'
import Sidebar from '../../components/hotelOwner/Sidebar'
import { Outlet } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import { useEffect } from 'react'

const Layout = () => {
  const {isOwner,navigate}=useAppContext();

 useEffect(()=>{
  if(!isOwner){
    navigate('/');
  }
 },[isOwner,navigate]);

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
