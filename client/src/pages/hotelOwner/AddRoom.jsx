import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets } from '../../assets/assets'
const AddRoom = () => {


   const [images, setImages] = useState(
    {
      1: null,
      2: null,
      3: null,
      4: null,
     
    }
   )

   const [inputs, setInputs] = useState(
    {
      roomType: '',
      pricePerNight: 0,
      amenities: {
        FreeWifi: false,
        FreeBreakfast: false,
        RoomService: false,
        MountainView: false,
        PoolAccess: false,
      },
      description: '',
      maxGuests: '',
    }
   )
  
  return (
    <div>
      

      <form>
           <Title title="Add Room" align="left" font="outfit"  subtitle="Add a new room to your hotel"/>
            {/* upload area for images */}
            <p className='text-sm font-medium'>Images</p>
            <div className='flex flex-wrap gap-4'>
              {Object.keys(images).map((key) => (
               <label  htmlFor={'roomImage${key}'} key={key}  className='flex flex-col gap-2'>
                <img  src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea}  alt="" className='max-h-13 cursor-pointer object-cover rounded-lg' />
                <input type="file" accept='image/*' id={'roomImage${key}'} onChange={(e) => setImages({...images, [key]: e.target.files[0]})} className='hidden' />
               </label>
              ))}
            </div>

            <div className='flex flex-col gap-4'>
              <p className='text-2xl font-medium mt-4'>Room Details</p>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Room Type</p>
                <select name="roomType" id="roomType" className='w-full p-2 rounded-lg border border-gray-300' onChange={(e) => setInputs({...inputs, roomType: e.target.value})}>
                  <option value="">Select Room Type</option>
                  <option value="single">Single</option>
                  <option value="double">Double</option>
                  <option value="luxury">Luxury</option>
                  <option value="family Suite">Family Suite</option>
                </select>
              </div>

              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Price per Night</p>
                <input type="number" name="pricePerNight" 
                value={inputs.pricePerNight}
                id="pricePerNight" className='w-full p-2 rounded-lg border border-gray-300' onChange={(e) => setInputs({...inputs, pricePerNight: e.target.value})} />
              </div>
              
                {/* amenities */}
                <p className='text-sm font-medium'>Amenities</p>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-2'>
                    <input type="checkbox" 
                    name="FreeWifi" 
                    id="FreeWifi" 
                    checked={inputs.amenities.FreeWifi}
                    onChange={(e) => setInputs({...inputs, amenities: {...inputs.amenities, FreeWifi: e.target.checked}})}
                    />
                    <label htmlFor="FreeWifi">Free Wifi</label>
                    <input type="checkbox" name="FreeBreakfast" id="FreeBreakfast" />
                    <label htmlFor="FreeBreakfast">Free Breakfast</label>
                    <input type="checkbox" name="RoomService" id="RoomService" />
                    <label htmlFor="RoomService">Room Service</label>
                    <input type="checkbox" name="MountainView" id="MountainView" />
                    <label htmlFor="MountainView">Mountain View</label>
                    
                  </div>
                </div>
              <div>
                <p className='text-sm font-medium'>Room Description</p>
                <textarea name="description" id="description" className='w-full p-2 rounded-lg border border-gray-300' onChange={(e) => setInputs({...inputs, description: e.target.value})} />
              </div>
              <div>
                <p className='text-sm font-medium'>Max Guests</p>
                <input type="number" name="maxGuests" id="maxGuests" className='w-full p-2 rounded-lg border border-gray-300' onChange={(e) => setInputs({...inputs, maxGuests: e.target.value})} />
              </div>
            </div>
            <button type='submit' className='flex justify-center items-center mt-4 bg-blue-500 text-white p-2 rounded-lg'>Add Room</button>
      </form>
    </div>
  )
}

export default AddRoom
