import React from 'react'
import { exclusiveOffers } from '../assets/assets'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const ExclusiveOffers = () => {
  const navigate = useNavigate()

  return (
    <div className="px-4 md:px-16 lg:px-24 xl:px-32 py-16">
      <Title title="Exclusive Offers" subtitle="Best offers for you" align="left" font="font-playfair" />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
        {exclusiveOffers.map((offer) => (
          <div key={offer._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-playfair text-xl font-medium">{offer.title}</h3>
              <p className="text-gray-600 mt-2">{offer.description}</p>
              <div className="flex items-center justify-between mt-4">
                <p className="text-primary font-medium">{offer.priceOff}% OFF</p>
                <p className="text-gray-500">Expires: {offer.expiryDate}</p>
              </div>
            </div>
         <div className='flex justify-center items-center'>
         <button className=' bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-all'>
                View Offers
            </button>
         </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button 
          onClick={() => {
            navigate('/offers');
            scrollTo(0, 0);
          }} 
          className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-all"
        >
          View All Offers
        </button>
      </div>
    </div>
  )
}

export default ExclusiveOffers

