import React from 'react'
import Title from '../components/Title'
import { roomsDummyData } from '../assets/assets'
import HotelCard from '../components/HotelCard'
import { useState } from 'react'

const CheckBox = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className='flex items-center gap-2'>
      <input 
        type="checkbox" 
        checked={selected} 
        onChange={(e) => onChange(e.target.checked, label)} 
        className='w-4 h-4' 
      />
      <span className='text-sm font-medium text-gray-800'>{label}</span>
    </label>
  );
};

const RadioButton = ({label,selected=false,onChange=()=>{}}) => { return (
  <label className='flex items-center gap-2'>
   <input type="radio" name="sortOption" checked={selected} onChange={()=>onChange(label)} className='w-4 h-4' />
   <span className='text-sm font-medium text-gray-800'>{label}</span>
  </label>
 )
 }

const Allrooms = () => {
  const [openFilters, setOpenFilters] = useState(false)
  const [selectedRoomTypes, setSelectedRoomTypes] = useState([])
  const [selectedSortOption, setSelectedSortOption] = useState('')
 
  const handleRoomTypeChange = (checked, roomType) => {
    if (checked) {
      setSelectedRoomTypes([...selectedRoomTypes, roomType])
    } else {
      setSelectedRoomTypes(selectedRoomTypes.filter(type => type !== roomType))
    }
  }

  const handleSortOptionChange = (option) => {
    setSelectedSortOption(option)
  }

  const clearAllFilters = () => {
    setSelectedRoomTypes([])
    setSelectedSortOption('')
  }

  const roomTypes = [
    "Single Bed",
    "Double Bed",
    "Queen Bed",
    "King Bed",
    "Suite",
  ];
  const priceRange = [
   "0 to 500",
   "500 to 1000",
   "1000 to 1500",
   "1500 to 2000",
   "2000 to 2500",
   "2500 to 3000",
   "3000 to 3500",
   "3500 to 4000",
  ];

  const sortOptions = [
   "Price: Low to High",
   "Price: High to Low",
   "Rating: High to Low",
   "Rating: Low to High",
   "Most Popular",
  ];

  return (
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:px-16 lg:px-24 xl:px-32 '>
      <div>
        <div>
            <Title title="Hotel Rooms" subtitle="Explore our wide range of hotel rooms" align="left"  />
        </div>
         {
            roomsDummyData.map((room) => (
                <HotelCard key={room._id} room={room} />
            ))
         }
      </div>
      {/* //filters */}
      <div className='bg-white w-80 border border-gray-300 text-gray-500 max-lg:mb-8 min-lg:mt-16'>
        <div className={`flex justify-between items-center px-5 py-2.5 min-lg:border-b ${openFilters  && "border-b border-gray-300"}`}>
            <p className='text-base font-medium text-gray-800'>FILTERS</p>
            <div className='text-xs cursor-pointer'>
                <span onClick={() => setOpenFilters(!openFilters)} className='lg:hidden'>{openFilters ? "HIDE" : "SHOW"}</span>
                <span onClick={clearAllFilters} className='hidden lg:block'>CLEAR ALL</span>
            </div>
        </div>

        <div className={`${openFilters ? 'h-auto' : "h-0 lg:h-auto" } overflow-hidden transition-all duration-300`}>
         <div className='px-5 pt-2.5'>
             <p className='text-sm font-medium text-gray-800'>Popular filters</p>
            {
              roomTypes.map((room,index) => (
                <CheckBox 
                  key={index} 
                  label={room} 
                  selected={selectedRoomTypes.includes(room)} 
                  onChange={handleRoomTypeChange} 
                />
              ))
            }
             
         </div>
         <div className='px-5 pt-2.5'>
             <p className='text-sm font-medium text-gray-800'>Price Range</p>
            {
              priceRange.map((room,index) => (
                <CheckBox 
                  key={index} 
                  label={room} 
                  selected={selectedRoomTypes.includes(room)} 
                  onChange={handleRoomTypeChange} 
                />
              ))
            }
             
         </div>

         <div className='px-5 pt-2.5 pb-3'>
             <p className='text-sm font-medium text-gray-800'>Sort By</p>
            {
              sortOptions.map((room,index) => (
                <RadioButton 
                  key={index} 
                  label={room} 
                  selected={selectedSortOption === room} 
                  onChange={handleSortOptionChange} 
                />
              ))
            }
             
         </div>
        </div>
      </div>
    </div>
  )
}

export default Allrooms
