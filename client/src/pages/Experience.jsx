import React from 'react'
import Title from '../components/Title'


const Experience = () => {
  const experiences = [
    {
      title: "Luxury Spa",
      description: "Indulge in our world-class spa treatments and massages.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["Massage Therapy", "Facial Treatments", "Steam Room", "Hot Tub"]
    },
    {
      title: "Fine Dining",
      description: "Experience culinary excellence at our award-winning restaurants.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["International Cuisine", "Wine Tasting", "Chef's Special", "Room Service"]
    },
    {
      title: "Fitness Center",
      description: "Stay active with our state-of-the-art fitness facilities.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["Modern Equipment", "Personal Training", "Yoga Classes", "Swimming Pool"]
    }
  ]

  const amenities = [
    {
      icon: "🏊‍♂️",
      title: "Swimming Pool",
      description: "Enjoy our temperature-controlled indoor and outdoor pools"
    },
    {
      icon: "🍽️",
      title: "Restaurants",
      description: "Multiple dining options with international cuisine"
    },
    {
      icon: "💆‍♀️",
      title: "Spa & Wellness",
      description: "Rejuvenate with our premium spa treatments"
    },
    {
      icon: "🏋️‍♂️",
      title: "Fitness Center",
      description: "24/7 access to modern fitness equipment"
    },
    {
      icon: "🚗",
      title: "Valet Parking",
      description: "Complimentary valet parking service"
    },
    {
      icon: "📶",
      title: "Free WiFi",
      description: "High-speed internet throughout the hotel"
    }
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
                  <span className="block">Experience</span>
                  <span className="block text-blue-600">Luxury & Comfort</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Discover a world of exceptional experiences, premium amenities, and unforgettable moments at our hotel.
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Experiences Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Featured Experiences</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Unforgettable Moments
            </p>
          </div>
          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {experiences.map((experience) => (
                <div key={experience.title} className="relative">
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      className="w-full h-64 object-cover"
                      src={experience.image}
                      alt={experience.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{experience.title}</h3>
                      <p className="text-gray-200 mb-4">{experience.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {experience.features.map((feature) => (
                          <span
                            key={feature}
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Hotel Amenities</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything You Need
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {amenities.map((amenity) => (
                <div key={amenity.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6">
                    <div className="text-4xl mb-4">{amenity.icon}</div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{amenity.title}</h3>
                    <p className="text-gray-500">{amenity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to experience luxury?</span>
            <span className="block text-blue-200">Book your stay today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/rooms"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                View Rooms
              </a>
            </div>
      
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience 