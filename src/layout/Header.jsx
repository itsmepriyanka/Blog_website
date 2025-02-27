import React, { useState } from 'react'
import { FaBars, FaFacebook, FaInstagramSquare } from 'react-icons/fa'
import { FaSquareXTwitter, FaXmark } from "react-icons/fa6";
import {  NavLink } from 'react-router-dom'


const Header = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    // navitems
    return (
        <header className='bg-blue-500 text-white fixed top-0 left-0 right-0' >
            <nav className='px-4 py-4 max-w-7xl flex mx-auto justify-between items-center'>
                <a href="/" className='text-xl font-bold text-black'>Blog
                    <span className='text-orange-400'>Sphere</span></a>

                {/* navritems for lg devices */}
            
                <ul className='md:flex gap-12 text-lg hidden'>
                    <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-orange-400 font-bold' : 'text-white'}>Home</NavLink></li>
                    <li><NavLink to='/about' className={({ isActive }) => isActive ? 'text-orange-400 font-bold' : 'text-white'}>About</NavLink></li>
                    <li><NavLink to='/services' className={({ isActive }) => isActive ? 'text-orange-400 font-bold' : 'text-white'}>Services</NavLink></li>
                    <li><NavLink to='/blogs' className={({ isActive }) => isActive ? 'text-orange-400 font-bold' : 'text-white'}>Blogs</NavLink></li>
                    <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'text-orange-400 font-bold' : 'text-white'}>Contact</NavLink></li>
                </ul>

                {/* menu icons */}
                <div className='text-white lg:flex gap-4 items-center hidden '>
                    <a href="/" className='hover:text-orange-500'><FaFacebook /></a>
                    <a href="/" className='hover:text-orange-500'><FaInstagramSquare /></a>
                    <a href="/" className='hover:text-orange-500'><FaSquareXTwitter /></a>
                </div>

                {/* mobile menu btn, display mobile screen */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='cursor-pointer'>
                        {
                            isMenuOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5' />
                        }
                    </button>

                </div>
            </nav>

            {/* menu items only for mobile */}
            <div>
            <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? 'fixed top-0 left-0 w-full transition-all ease-out duration-150' : 'hidden'}`}>
                    <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-orange-400 font-bold' : 'text-black'}>Home</NavLink></li>
                    <li><NavLink to='/about' className={({ isActive }) => isActive ? 'text-orange-400 font-bold' : 'text-black'}>About</NavLink></li>
                    <li><NavLink to='/services' className={({ isActive }) => isActive ? 'text-orange-400 font-bold' : 'text-black'}>Services</NavLink></li>
                    <li><NavLink to='/blogs' className={({ isActive }) => isActive ? 'text-orange-400 font-bold' : 'text-black'}>Blogs</NavLink></li>
                    <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'text-orange-400 font-bold' : 'text-black'}>Contact</NavLink></li>
                </ul>
            </div>
        </header>


    )
}

export default Header