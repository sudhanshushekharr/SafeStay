import React, { useState } from 'react'
import Title from '../components/Title'
import Bookings from '../components/Bookings'
import { userBookingsDummyData } from '../assets/assets'

const MyBookings = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData)

  return (
    <div className='min-h-[70vh]'>
      <div className='container mx-auto px-4 py-16 '>
        <Title title="My Bookings" subtitle="Easily manage your past,current and future bookings in one place" align="left"/>
      </div>
      <div className='flex justify-between items-center px-5 max-w-4xl mx-auto'>
        <p className='text-xl'>Hotels</p>
        <p className='text-xl'>Date & Timings</p>
        <p className='text-xl'>Payments</p>
      </div>

      <div className='space-y-6'>
        {bookings.map((booking) => (
          <Bookings key={booking._id} booking={booking} />
        ))}
      </div>
    </div>
  )
}

export default MyBookings
