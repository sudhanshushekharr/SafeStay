import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { roomsDummyData } from '../assets/assets'
import { assets } from '../assets/assets'
import { facilityIcons  } from '../assets/assets'
import { roomCommonData } from '../assets/assets'
const RoomDetails = () => {
    const {id} = useParams()
    const [room,setRoom] = useState(null)

    const [mainImage, setMainImage] = useState(null)
    
    useEffect(() => {
        const room = roomsDummyData.find(room => room._id === id)
        room && setRoom(room)
        room && setMainImage(room.images[0])
    },[id])
  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      {/* room details */}
 <div>
 <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
        <h1 className='font-playfair text-2xl '>{room.hotel.name} <span className=' font-inter text-sm'>{room.roomType}</span></h1>
        <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full '>20%OFF</p>
      </div>
      {/* room rating */}
      <div className='flex items-center gap-2'>
        <div className='flex items-center gap-1'>
            <p className='text-sm font-inter'>{room.ratings}</p>
           <img src={assets.starIconFilled} alt="star" className='w-4 h-4' />
      
        </div>
     {/* room address */}
     <div className='flex items-center gap-2'>
        <img src={assets.locationIcon} alt="location" className='w-4 h-4' />
        <p className='text-sm font-inter'>{room.hotel.address}</p>
     </div>
 </div>
     {/* room images */}
     <div className='flex flex-col md:flex-row items-start md:items-center mt-6 gap-2'>
        <div className='lg:w-1/2 w-full'>
            <img src={mainImage} alt="room" className='w-full rounded-xl shadow-lg   object-cover' />
        </div>
        <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
            {room?.images.length >1 && room.images.map((image,index)=>(
                <img key={index} src={image} alt="room" className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && 'outline-3 outline-orange-500'}`} onClick={()=>setMainImage(image)} />
            ))}
        </div>
     </div>

     {/* room highlights */}
     <div className='flex flex-col md:flex-row md:justify-between mt-10'>
        <div className='flex flex-col gap-2'> 
            <h1 className='font-playfair text-2xl '>Experience luxury with our premium room</h1>
            <div className='flex flex-col gap-2 mt-4'>
            {room.amenities.map((amenity, index) => (
                <div key={index} className='flex items-center justify-gap-1'>
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
        {/* room price */}
        <div >
            <h1 className='font-playfair text-2xl '>${room.pricePerNight}</h1>
            <p className='text-sm font-inter'>per night</p>
        </div>
     </div>
     {/* check in checkout form */}
     <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'>
        <div className='flex flex-col md:flex-row gap-4 w-full'>
            <div className='flex-1'>
                <label htmlFor="checkIn" className='text-sm font-inter text-gray-600'>Check In</label>
                <input 
                    type="date" 
                    id='checkIn' 
                    className='w-full p-2.5 border border-gray-300 rounded-md mt-1 focus:outline-none focus:border-primary' 
                />
            </div>
            <div className='flex-1'>
                <label htmlFor="checkOut" className='text-sm font-inter text-gray-600'>Check Out</label>
                <input 
                    type="date" 
                    id='checkOut' 
                    className='w-full p-2.5 border border-gray-300 rounded-md mt-1 focus:outline-none focus:border-primary' 
                />
            </div>
            <div className='flex-1'>
                <label htmlFor="guests" className='text-sm font-inter text-gray-600'>Guests</label>
                <input 
                    type="number" 
                    id='guests' 
                    min="1"
                    max="4"
                    className='w-full p-2.5 border border-gray-300 rounded-md mt-1 focus:outline-none focus:border-primary' 
                />
            </div>
            <button type='submit' className='bg-primary text-white px-8 py-2.5 rounded-md hover:bg-primary/90 transition-all mt-6 md:mt-0'>
             Check Availability
            </button>
        </div>
     </form>

     {/* common specification */}
     <div className='flex flex-col md:flex-row items-start md:items-center gap-4 mt-16'>
        {roomCommonData.map((item,index)=>(
            <div key={index} className='flex flex-col gap-2'>
                <img src={item.icon} alt={item.title} className='w-4 h-4' />
                <h1 className='font-playfair text-2xl '>{item.title}</h1>
                <p className='text-sm font-inter'>{item.description}</p>
            </div>
        ))}
     </div>
     {/* guest description */}
     <div className='flex flex-col md:flex-row items-start md:items-center gap-4 mt-16'>
        <div className='flex flex-col gap-2'>
            
            <p> By booking this room, you agree to our standard terms and conditions. Check-in time is 2:00 PM and check-out is 11:00 AM. 
                     Maximum occupancy is 4 guests per room. Children under 12 stay free. Smoking is not permitted in rooms. 
                     Pets are not allowed. Cancellations made 24 hours before check-in are free of charge. 
                     Late cancellations may incur a one-night charge. We accept all major credit cards and cash payments. 
                     Special requests should be made at the time of booking. The hotel reserves the right to charge a security deposit upon check-in.</p>
        </div>
     </div>

     {/* owner details */}
     <div className='flex flex-col md:flex-row items-start md:items-center gap-4 mt-16'>
        <div className='flex flex-col gap-2'>
            <h1 className='font-playfair text-2xl '>Owner Details</h1>
           <img src={room.hotel.owner.image} alt="owner" className='w-10 h-10 rounded-full' />
           <div>
            <h1 className='font-playfair text-2xl '>{room.hotel.owner.name}</h1>
            <p className='text-sm font-inter'>{room.hotel.owner.email}</p>
           </div>
        </div>
        <div>
            <button className='bg-primary text-white px-8 py-2.5 rounded-md hover:bg-primary/90 transition-all mt-6 md:mt-0'>Contact Now</button>
        </div>
     </div>
      </div>
    </div>
  )
}

export default RoomDetails
