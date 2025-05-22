import React from 'react'
import { assets, cities } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col items-start justify-center px-4 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] bg-cover bg-center bg-no-repeat h-screen '>
      <p className='text-sm font-light rounded-full bg-black/50 px-4 py-1'>The ultimate destination for your next getaway</p>
      <h1 className='font-playfair text-4xl md:text-5xl lg:text-6xl font-medium mt-2'>
        Discover the best hotels in the world
      </h1>
      <p className='text-sm font-light mt-2'>
        Book your next stay with us and enjoy a comfortable and luxurious experience
      </p>


      <form className='bg-white text-gray-500 rounded-lg px-6 py-4  mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

            <div>
                <div className='flex items-center gap-2'>
                  <img src={assets.calenderIcon} alt="calendar" />
                    <label htmlFor="destinationInput">Destination</label>
                </div>
                <input list='destinations' id="destinationInput" type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />
                <datalist id='destinations'>
              {cities.map((city,i)=>(
                <option key={i} value={city}/>
              ))}
                  
                </datalist>
            </div>

            <div>
                <div className='flex items-center gap-2'>
                   
                    <img src={assets.calenderIcon} alt="calendar" className='w-4 h-4'/>
                    <label htmlFor="checkIn">Check in</label>
                </div>
                <input id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div>
                <div className='flex items-center gap-2'>
                <img src={assets.calenderIcon} alt="calendar" className='w-4 h-4'/>
                    <label htmlFor="checkOut">Check out</label>
                </div>
                <input id="checkOut" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                <label htmlFor="guests">Guests</label>
                <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" />
            </div>

            <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
            <img src={assets.searchIcon} alt="search" className='w-4 h-7'/>
                <span>Search</span>
            </button>
        </form>
    </div>
  )
}

export default Hero
