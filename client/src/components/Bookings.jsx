import React from 'react'
import { useAuth } from "@clerk/clerk-react";

const Bookings = ({ booking }) => {
  if (!booking) return null;

  // Format date to readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='bg-white rounded-lg shadow-md p-6 mb-6'>
        <div className='flex gap-6'>
          {/* Hotel Image */}
          <div className='w-48 h-48 flex-shrink-0'>
            <img 
              src={booking.room.images[0]}
              alt={booking.hotel.name}
              className='w-full h-full object-cover rounded-lg'
            />
          </div>

          {/* Hotel Details */}
          <div className='flex-1'>
            <h3 className='text-2xl font-playfair font-semibold mb-2'>{booking.hotel.name}</h3>
            <span>{booking.room.roomType}</span>
            <div className='space-y-2'>
              <p className='text-gray-600'>
                <i className="fas fa-map-marker-alt mr-2"></i>
                {booking.hotel.address}
              </p>
              <p className='text-gray-600'>
                <i className="fas fa-users mr-2"></i>
                {booking.guests} {booking.guests === 1 ? 'Guest' : 'Guests'}
              </p>
              <div>
                <p>Total : ${booking.totalPrice}</p>
                <p>Payment Method : {booking.paymentMethod}</p>
              </div>
            </div>
          </div>

          {/* Check-in/Check-out Times */}
          <div className='flex-1'>
            <div className='space-y-4'>
              <div>
                <p className='text-gray-500 text-sm'>Check-in</p>
                <p className='font-semibold'>{formatDate(booking.checkInDate)}</p>
              </div>
              <div>
                <p className='text-gray-500 text-sm'>Check-out</p>
                <p className='font-semibold'>{formatDate(booking.checkOutDate)}</p>
              </div>
            </div>
          </div>

          {/* Payment Status */}
          <div className='flex-1 flex items-center justify-center'>
            <div className='text-center'>
              <p className='text-gray-500 text-sm mb-2'>Payment Status</p>
              <span className={`px-4 py-2 rounded-full font-semibold ${
                booking.isPaid 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {booking.isPaid ? 'Paid' : 'Pending'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function ShowTokenButton() {
  const { getToken } = useAuth();

  const handleClick = async () => {
    const token = await getToken();
    alert(token); // or console.log(token)
  };

  return <button onClick={handleClick}>Show My Clerk Token</button>;
}

export default Bookings;
