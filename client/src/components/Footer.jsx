import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#F6F9FC] text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                <div className='max-w-80'>
                <Link to='/' onClick={() => setIsScrolled(true)}>
                <img src={assets.logo} alt="logo" className={`h-9 ${ "invert opacity-80"}`} />
            </Link>
                    <p className='text-sm'>
                      Your trusted hotel partner for unforgettable adventures.
                    </p>
                    <div className='flex items-center gap-3 mt-4'>
                        {/* Instagram */}
                      <img src={assets.instagramIcon} alt="instagram" className='w-6 ' />
                        {/* Facebook */}
                        <img src={assets.facebookIcon} alt="facebook" className='w-6 ' />
                        {/* Twitter */}
                        <img src={assets.twitterIcon} alt="twitter" className='w-6 ' />
                        {/* LinkedIn */}
                        <img src={assets.linkendinIcon} alt="linkedin" className='w-6 ' />
                    </div>
                </div>

                <div>
                    <p className='font-playfair text-2xl text-gray-800'>SafeStay</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>

                    <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Hotels</a></li>
                        <li><a href="#">Experience</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Partners</a></li>
                    </ul>
                </div>

                <div>
                    <p className='font-playfair text-2xl text-gray-800'>Support</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Safety Information</a></li>
                        <li><a href="#">Cancellation Options</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Accessibility</a></li>
                    </ul>
                </div>

                <div className='max-w-80'>
                    <p className='font-playfair text-2xl text-gray-800'>Stay Updated</p>
                    <p className='mt-3 text-sm'>
                        Subscribe to our newsletter for inspiration and special offers.
                    </p>
                    <div className='flex items-center mt-4'>
                        <input type="text" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder='Your email' />
                        <button className='flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r'>
                            {/* Arrow icon */}
                           <img src={assets.arrowIcon} alt="arrowicon" />
                        </button>
                    </div>
                </div>
            </div>
            <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} SafeStay. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
        </div>
  )
}

export default Footer
