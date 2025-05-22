import React from 'react'
import Title from './Title'
import { testimonials } from '../assets/assets'
import { assets } from '../assets/assets'
const Testimonials = () => {
  return (
    <div>
      <Title title="Testimonials" subtitle="What our customers say" align="center" font="font-playfair" />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
        {testimonials.slice(0, 3).map((testimonial) => (
          <div key={testimonial.id} className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img src={testimonial.image} alt={testimonial.name} className='w-full h-48 object-cover rounded-t-lg' />
            <div className='p-4'>
              <h3 className='font-playfair text-xl font-medium'>{testimonial.name}</h3>
              <p className='text-gray-600 mt-2'>{testimonial.address}</p>
              <div className='flex items-center gap-2'>
              <p className='text-primary font-medium'>{testimonial.rating} / 5</p>
              <img src={assets.starIconFilled} alt="star" className='w-4 h-4' />
              </div>
              <div className='flex items-center justify-between mt-4'>
            
                <p className='text-gray-500'>{testimonial.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
