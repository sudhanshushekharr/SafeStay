import React from 'react'
import { assets } from '../assets/assets'
import { cities } from '../assets/assets'

const HotelReg = ({setIsOpen}) => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 via-zinc-100 flex justify-center items-center bg-black/70'>
      <form className='flex bg-white rounded-xl max-w-4xl max-md:mx-2'>
        <img src={assets.regImage} alt="" className='w-1/2 rounded-xl hidden md:block' />

        <div className=' relative flex flex-col items-center md:w-1/2 p-8 md:p-10'>
            <img onClick={() => setIsOpen(false)} src={assets.closeIcon} alt="" className='w-4 h-4 absolute top-2 right-2' />
            <p className='text-2xl font-semibold'>Register your Hotel</p>

            <div className='w-full'>
                <label htmlFor="name">Hotel Name</label>
                <input id='name' type="text" placeholder='Enter your hotel name' className='w-full p-2 rounded-md border border-gray-300' required />
            </div>
            {/* phone */}
            <div className='w-full'>
                <label htmlFor="contact">Phone</label>
                <input id='contact' type="text" placeholder='Enter your hotel name' className='w-full p-2 rounded-md border border-gray-300' required />
            </div>
                  {/* address */}
            <div className='w-full'>
                <label htmlFor="address">Address</label>
                <input id='address' type="text" placeholder='Enter your hotel address' className='w-full p-2 rounded-md border border-gray-300' required />
            </div>

            {/* select city dropdown */}
            <div className='w-full'>
                <label htmlFor="city">City</label>
                <select id='city' className='w-full p-2 rounded-md border border-gray-300 font-medium'>
                  <option value=" ">Select City</option>
                  {cities.map((city,index)=>(
                    <option key={index} value={city}>{city}</option>
                  ))}
                    
                </select>
            </div>
            <button className='bg-blue-500 text-white p-2 rounded-md mt-5'>Register</button>
        </div>
      </form>
    </div>
  )
}

export default HotelReg
