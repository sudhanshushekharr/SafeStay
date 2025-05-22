import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets, facilityIcons } from '../assets/assets'

const HotelCard = ({room}) => {
  const navigate = useNavigate()
  return (
   <div className='mt-8'>
     <div className='w-full h-full flex gap-4 bg-white rounded-lg shadow-md overflow-hidden'>
      {/* Image Section */}
      <div className='w-1/2 h-[200px] overflow-hidden'>
        <img 
          onClick={() => {
            navigate(`/rooms/${room._id}`)
            window.scrollTo(0,0)
          }} 
          className='w-full h-full object-cover' 
          src={room.images[0]} 
          alt="hotel" 
        />
      </div>

      {/* Details Section */}
      <div className='w-1/2 p-4 flex flex-col justify-between'>
        <div>
          <p className='text-gray-600'>{room.hotel.city}</p>
          <h3 className='text-lg font-bold'>{room.roomType}</h3>
          <p className='text-sm text-gray-500'>${room.pricePerNight} per night</p>
          <div className='flex items-center gap-1 mt-1'>
            <span className='text-sm font-medium'>{room.ratings}</span>
            <img src={assets.starIconFilled} alt="star" className='w-4 h-4' />
          </div>
          <div className='mt-3'>
            <p className='text-sm font-medium text-gray-600 mb-2'>Amenities:</p>
            <div className='flex flex-row flex-wrap items-center gap-2'>
              {[...new Set(room.amenities)].map((amenity, index) => (
                <div key={index} className='flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md'>
                  <img 
                    src={facilityIcons[amenity]} 
                    alt={amenity} 
                    className='w-4 h-4'
                  />
                  <span className='text-xs text-gray-500'>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <button 
            onClick={() => navigate(`/rooms/${room._id}`)}
            className='bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-all'
          >
            View Details
          </button>
        </div>
      </div>
    </div>
   </div>
  )
}

export default HotelCard
