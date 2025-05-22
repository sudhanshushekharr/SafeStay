import React from 'react'
import { roomsDummyData } from '../assets/assets'
import Cards from './Cards'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const FeaturedDestination = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center justify-center'>
     <div className='mt-8'>
     <Title title="Featured Destination" subtitle="Explore the best destinations in the world" align="left" font="font-playfair" />
      
     </div>
      
      <div className='flex flex-wrap items-center justify-center gap-4 mt-20'>
        {roomsDummyData.slice(0,4).map((room,index)=>(
            <Cards key={room._id} room={room} index={index} />
        ))}
      </div>
      <button onClick={()=>{navigate('/rooms'); scrollTo(0,0)}} className='mt-10 bg-primary text-white px-4 py-2 rounded-md'>
        View All Destination
      </button>
    </div>
  )
}

export default FeaturedDestination
