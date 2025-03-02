import React from 'react'
import { Link } from 'react-router-dom'
import{FaArrowRight} from "react-icons/fa6"
 
const Banner = () => {
  return (
    <div className='px-4 py-32 bg-blue-500 mx-auto'>
        <div className='text-white text-center'>
            <h1 className='text-5xl lg:text-7xl ledding-snug font-bold mb-5'>Welcome to Our Blog</h1>
            <p className='text-gray-100 lg:w-3/5 mx-auto ' >Start you blog today and join a community of written and readers who are 
                passionate about sharing their stories and ideas. We offer everything you 
                need to get started, from helpful tips and tutorial.</p>

                <div>
                    <Link to='/' className="font-medium hover:text-purple-500 inline-flex items-center py-1">Learn more 
                    <FaArrowRight className='mt-1 ml-2'/></Link>
                </div>
        </div>
    </div>
  )
}

export default Banner