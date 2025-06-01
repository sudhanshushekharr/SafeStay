import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { cities } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import { toast } from 'react-hot-toast'

const HotelReg = () => {
  const {setShowHotelReg ,axios,getToken,setIsOwner} = useAppContext();
  
 const [name,setName]=useState('');
 const [contact,setContact]=useState('');
 const [address,setAddress]=useState('');
 const [city,setCity]=useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    try{
      const res=await axios.post('/api/hotels',{name,contact,address,city}, {
        headers: {
          'Authorization': `Bearer ${ await getToken()}`
        }
      });
      if(res.data.success){
        toast.success(res.data.message);
        setIsOwner(true);
        setShowHotelReg(false);
      }
      else{
        toast.error(res.data.message);
      }
    }catch(error){
     toast.error(error.response.data.message);
    }

  };
  
  return (
    <div onClick={()=>setShowHotelReg(false)} className='fixed top-0 bottom-0 left-0 right-0 via-zinc-100 flex justify-center items-center bg-black/70'>
      <form onSubmit={handleSubmit} onClick={(e)=>e.stopPropagation()} className='flex bg-white rounded-xl max-w-4xl max-md:mx-2'>
        <img src={assets.regImage} alt="" className='w-1/2 rounded-xl hidden md:block' />

        <div className='relative flex flex-col items-center md:w-1/2 p-8 md:p-10'>
            <img onClick={() => setShowHotelReg(false)} src={assets.closeIcon} alt="" className='w-4 h-4 absolute top-2 right-2 cursor-pointer' />
            <p className='text-2xl font-semibold'>Register your Hotel</p>

            <div className='w-full'>
                <label htmlFor="name">Hotel Name</label>
                <input id='name' type="text" placeholder='Enter your hotel name' className='w-full p-2 rounded-md border border-gray-300' required value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='w-full'>
                <label htmlFor="contact">Phone</label>
                <input id='contact' type="text" placeholder='Enter your phone number' className='w-full p-2 rounded-md border border-gray-300' required value={contact} onChange={(e)=>setContact(e.target.value)}/>
            </div>
            <div className='w-full'>
                <label htmlFor="address">Address</label>
                <input id='address' type="text" placeholder='Enter your hotel address' className='w-full p-2 rounded-md border border-gray-300' required value={address} onChange={(e)=>setAddress(e.target.value)}/>
            </div>

            <div className='w-full'>
                <label htmlFor="city">City</label>
                <select value={city} onChange={(e)=>setCity(e.target.value)} id='city' className='w-full p-2 rounded-md border border-gray-300 font-medium' required>
                  <option value="">Select City</option>
                  {cities.map((city,index)=>(
                    <option key={index} value={city}>{city}</option>
                  ))}
                </select>
            </div>
            <button type="submit" className='bg-blue-500 text-white p-2 rounded-md mt-5 hover:bg-blue-600'>Register</button>
        </div>
      </form>
    </div>
  )
}

export default HotelReg
