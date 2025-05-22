import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets';

const Cards = ({room,index}) => {
  return (
  <Link to={`/rooms/${room._id}`} onClick={()=>{
    scrollTo(0,0);
  }} key={room._id}>
   
        <img src={room.images[0]} alt=""  className='w-[300px] h-[200px] object-cover rounded-lg' />
      
       
        <div className='p-4 pt-5'>
            <div className='flex items-center justify-between'>
                <p className='font-playfair text-xl font-medium text-gray-800'>{room.hotel.name}</p>

            <div className='flex items-center gap-1'>
                <img src={assets.starIconFilled} alt="star-icon" /> 4.5
            </div>
        </div>
        <div className='flex items-center gap-2 mt-2'>
        <img src={assets.locationIcon} alt="location-icon" className='w-4 h-4'/> 
        <span className='text-gray-600'>{room.hotel.address}</span>
        </div>
        <div className='flex items-center justify-between mt-4'>
            <p><span className='font-playfair text-xl font-medium text-gray-800'>${room.pricePerNight}</span> /night</p>
            <button className='bg-primary text-white px-4 py-2 rounded-lg'>Book Now</button>
        </div>
        </div>
  </Link>
  )
}

export default Cards

