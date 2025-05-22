import React from 'react'
import Title from '../../components/Title'
import { dashboardDummyData } from '../../assets/assets'

const StatCard = ({ title, value, bgColor, textColor }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-gray-600 text-lg font-medium">{title}</h2>
      <div className={`p-3 rounded-lg ${bgColor}`}>
        <div className={`w-6 h-6 ${textColor}`}></div>
      </div>
    </div>
    <p className="text-3xl font-bold text-gray-800">{value}</p>
  </div>
)

const Dashboard = () => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-600'
      case 'completed':
        return 'bg-green-100 text-green-600'
      default:
        return 'bg-gray-100 text-gray-600'
    }
  }

  return (
    <div className="space-y-8">
      <div className="mb-6">
        <Title 
          title="Dashboard" 
          subtitle="Welcome to your dashboard. You can manage your hotel here."  
          align="left" 
          font="outfit"  
        />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard 
          title="Total Bookings" 
          value={dashboardDummyData.totalBookings} 
          bgColor="bg-blue-500"
          textColor="text-white"
        />
        <StatCard 
          title="Total Revenue" 
          value={`$${dashboardDummyData.totalRevenue}`} 
          bgColor="bg-green-500"
          textColor="text-white"
        />
        <StatCard 
          title="Pending Payments" 
          value={dashboardDummyData.bookings.filter(booking => !booking.isPaid).length} 
          bgColor="bg-purple-500"
          textColor="text-white"
        />
      </div>

      {/* Recent Bookings Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Recent Bookings</h2>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          {/* Mobile View */}
          <div className="md:hidden">
            {dashboardDummyData.bookings.map((booking) => (
              <div key={booking._id} className="p-4 border-b border-gray-200 last:border-b-0">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-medium text-gray-900">{booking.room.name}</p>
                    <p className="text-sm text-gray-500">{booking.user.name}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                    {booking.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-gray-500">Check-in</p>
                    <p className="font-medium">{formatDate(booking.checkInDate)}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Check-out</p>
                    <p className="font-medium">{formatDate(booking.checkOutDate)}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Payment</p>
                    <p className="font-medium ">{booking.isPaid ? 'Paid' : 'Pending'}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Total</p>
                    <p className="font-medium">${booking.totalPrice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User Name</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room Name</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check-In</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check-Out</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Status</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {dashboardDummyData.bookings.map((booking) => (
                  <tr key={booking._id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-900">{booking.user.username}</td>
                    <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-900">{booking.room.hotel.name}</td>
                    <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-900">{formatDate(booking.checkInDate)}</td>
                    <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-900">{formatDate(booking.checkOutDate)}</td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-900">${booking.totalPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
