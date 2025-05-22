import React from 'react'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Allrooms from './pages/Allrooms'
import RoomDetails from './pages/RoomDetails'
import MyBookings from './pages/MyBookings'
import HotelReg from './components/HotelReg'
import { useState, useEffect } from 'react'
import Layout from './pages/hotelOwner/Layout'
import Dashboard from './pages/hotelOwner/Dashboard'
import AddRoom from './pages/hotelOwner/AddRoom'
import ListRoom from './pages/hotelOwner/ListRoom'
import About from './pages/About'
import Experience from './pages/Experience'
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isOwnerPath = useLocation().pathname.includes("owner");

  useEffect(() => {
    // Check if the form has been shown before
    const hasShownForm = localStorage.getItem('hasShownHotelReg');
    if (!hasShownForm) {
      setIsOpen(true);
    }
  }, []);

  // When form is closed, mark it as shown in localStorage
  const handleCloseForm = () => {
    setIsOpen(false);
    localStorage.setItem('hasShownHotelReg', 'true');
  };
     
  return (
    <div>
      {!isOwnerPath && <Navbar />}
      {isOpen && <HotelReg setIsOpen={handleCloseForm} />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<Allrooms />} />
          <Route path='/rooms/:id' element={<RoomDetails />} />
          <Route path='/my-bookings' element={<MyBookings />} />
          <Route path='/owner' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='add-room' element={<AddRoom />} />
            <Route path='list-room' element={<ListRoom />} />
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
