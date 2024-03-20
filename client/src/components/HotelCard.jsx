import React from 'react'
import image from '../assets/image.png'
import {Link} from 'react-router-dom'


function HotelCard({listing}) {
  console.log(listing)
  return (
    <Link to={`/listing/${listing._id}`}>
      <div className='rounded-xl shadow-md flex flex-col gap-2 max-w-72 md:h-[325px]'>
          <img src={listing.imageUrl} alt="" className='rounded-xl h-[200px] object-cover' />
          <div className='p-3' >
              <h1 className='font-bold text-xl line-clamp-1'>{listing.name}</h1>
              <p className='text-sm line-clamp-2'>{listing.description}</p>
              <div className='flex justify-between items-center'>
                  <p className='text-sm'><span className='font-bold text-2md'>$189</span> Night</p>
                  <button className='text-sm border p-1 rounded-lg'>Book Now</button>
              </div>
          </div>
      </div>
    </Link>
  )
}

export default HotelCard