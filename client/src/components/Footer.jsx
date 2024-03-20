import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer className='bg-blue-900 p-7 flex justify-between gap-8 text-white '>
      {/* Left  */}
      <div className='flex flex-col md:w-72'>
        <h1 className='text-xl md:text-xl font-bold mb-2'>Karan<span className='text-red-400'>Estate</span></h1>
        <p>Discover your dream home with our comprehensive real estate listings. Browse properties, connect with agents, and find your perfect place today!</p>
      </div>
      
      {/* Middle */}
      <div className=''>
        <h1 className='font-semibold mb-2'>Quick links</h1>
        <ul >
          <Link to='/'>
            <li className='hover:underline'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='hover:underline'>About us</li>
          </Link>
          <Link to='/trending'>
            <li className='hover:underline'>Treding</li>
          </Link>
          <Link to='/contact'>
            <li className='hover:underline'>Contact</li>
          </Link>
        </ul>
      </div>

      {/* Follow us */}
      <div className=''>
        <h1 className='font-semibold mb-2'>Follo us</h1>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Linkedin</p>
        <p>Redit</p>
        <p>medium</p>
      </div>

      {/* Right */}
      <div className=''>
        <h1 className='font-semibold mb-2'>Office location</h1>
        <p>A-3 Swam Samarth Build</p>
        <p>+91-9702810907</p>
        <p>Karanmharse@gmail.com</p>
        <p>KaranEstate.com</p>
      </div>
    </footer>
  )
}

export default Footer