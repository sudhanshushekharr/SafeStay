import React from 'react'
import Title from '../components/Title'

const About = () => {
  const teamMembers = [
    {
      name: "John Doe",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      bio: "With over 15 years of experience in the hospitality industry."
    },
    {
      name: "Jane Smith",
      position: "Operations Manager",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      bio: "Expert in hotel operations and guest satisfaction."
    },
    {
      name: "Mike Johnson",
      position: "Head of Technology",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      bio: "Leading our digital transformation initiatives."
    }
  ]

  const stats = [
    { label: "Hotels Listed", value: "500+" },
    { label: "Happy Customers", value: "10,000+" },
    { label: "Cities Covered", value: "50+" },
    { label: "Years of Experience", value: "10+" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Welcome to</span>
                  <span className="block text-blue-600">Hotel Management System</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Your trusted partner in hotel management and booking solutions. We're dedicated to making hotel management and booking seamless and efficient.
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-blue-50 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <dt className="text-sm font-medium text-gray-500 truncate">{stat.label}</dt>
                  <dd className="mt-1 text-3xl font-semibold text-blue-600">{stat.value}</dd>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Mission</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Transforming Hotel Management
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We're committed to revolutionizing the hotel management industry through innovative technology and exceptional service.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Team</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet the People Behind Our Success
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12 rounded-full" src={member.image} alt={member.name} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                      <p className="text-sm text-gray-500">{member.position}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-500">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Contact Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Get in Touch
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <p className="mt-2 text-gray-500">support@hotelmgmt.com</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Phone</h3>
              <p className="mt-2 text-gray-500">+1 (555) 123-4567</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Address</h3>
              <p className="mt-2 text-gray-500">123 Hotel Street, Suite 100<br />New York, NY 10001</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 