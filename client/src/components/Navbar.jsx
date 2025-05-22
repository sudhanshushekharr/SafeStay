import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useClerk, useUser, UserButton} from '@clerk/clerk-react';

const BookIcon=()=>(
    <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="4" fill="#2563EB" fill-opacity="0.1"/>
<g clip-path="url(#clip0_4338_348)">
<path d="M37.3334 36H10.6667V33.3333H12.0001V13.3333C12.0001 12.9797 12.1406 12.6406 12.3906 12.3905C12.6407 12.1405 12.9798 12 13.3334 12H32.0001C32.3537 12 32.6929 12.1405 32.9429 12.3905C33.1929 12.6406 33.3334 12.9797 33.3334 13.3333V20H36.0001V33.3333H37.3334V36ZM30.6668 33.3333H33.3334V22.6667H25.3334V33.3333H28.0001V25.3333H30.6668V33.3333ZM30.6668 20V14.6667H14.6667V33.3333H22.6668V20H30.6668ZM17.3334 22.6667H20.0001V25.3333H17.3334V22.6667ZM17.3334 28H20.0001V30.6667H17.3334V28ZM17.3334 17.3333H20.0001V20H17.3334V17.3333Z" fill="#3A7CFF"/>
</g>
<defs>
<clipPath id="clip0_4338_348">
<rect width="32" height="32" fill="white" transform="translate(8 8)"/>
</clipPath>
</defs>
</svg>
)

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/rooms' },
        { name: 'Experience', path: '/experience' },
        { name: 'About', path: '/about' },
    ];

  

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const {openSignIn} = useClerk();
    const {user}=useUser();
    const navigate=useNavigate();
    const location=useLocation();


    useEffect(() => {

        if(location.pathname!=='/'){
            setIsScrolled(true);
            return;
        }
        else{
            setIsScrolled(false);
        }

        // setIsScrolled(prev=>{
        //     if(location.pathname!=='/'){
        //         return true;
        //     }
        //     else{
        //         return prev;
        //     }
        // })

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    return (
        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

            {/* Logo */}
            <Link to='/'>
                <img src={assets.logo} alt="logo" className={`h-9 ${isScrolled && "invert opacity-80"}`} />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}>
                        {link.name}
                        <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                    </a>
                ))}
               {user &&  <button className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all`} onClick={()=>navigate('/owner')}>
                    Dashboard
                </button>}
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">
                <img src={assets.searchIcon} alt="search" className={`h-6 w-6 ${isScrolled ? "invert" : ""} transition-all duration-500`}/>
               
               {user ? (
                   <UserButton>
                       <UserButton.MenuItems>
                           <UserButton.Action 
                               label="My Bookings" 
                               labelIcon={<BookIcon/>} 
                               onClick={() => navigate('/my-bookings', {state: {from: location}})}
                           />
                       </UserButton.MenuItems>
                   </UserButton>
               ) : (
                   <button onClick={openSignIn} className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500">
                       Login
                   </button>
               )}
               

            </div>
    
            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
            <UserButton>
                       <UserButton.MenuItems>
                           <UserButton.Action 
                               label="My Bookings" 
                               labelIcon={<BookIcon/>} 
                               onClick={() => navigate('/my-bookings', {state: {from: location}})}
                           />
                       </UserButton.MenuItems>
                   </UserButton>
           <img onClick={() => setIsMenuOpen(true)} src={assets.menuIcon} alt="menu" className={`h-6 ${isScrolled ? "invert" : ""} `} />
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                    <img src={assets.closeIcon} alt="close-menu" className={`h-6 ${isScrolled ? "invert" : ""} `} />
                </button>

                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                        {link.name}
                    </a>
                ))}

               
               {user &&  <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all" onClick={()=>navigate('/owner')}>
                    Dashboard
                </button>}

                {!user &&<button onClick={openSignIn} className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
                    Login
                </button>}
            </div>
        </nav>
    );
}

export default Navbar;