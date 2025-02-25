import React from 'react'

const Header = () => {
    // const navItems = [
    //     { path: '/', Link: "Home" },
    //     { path: '/services', Link: "Services" },
    //     { path: '/contact', Link: "Contact" },
    //     { path: '/blogs', Link: "Blogs" },
    //     { path: '/about', Link: "About" }
    // ]
    return (
        <header className='bg-blue-500'>
            <nav className='px-4 py-4'>
                <a href="/" className='text-xl font-bold text-black'>Blog
                <span className='text-orange-400'>Sphere</span></a>
            </nav>
        </header>


    )
}

export default Header