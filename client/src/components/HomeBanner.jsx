import React from 'react'
import image from '../assets/image.png'

function HomeBanner() {
  return (
    <div className='flex justify-between items-center gap-2 bg-gradient-to-r from-slate-500 to-pink-300 px-16  rounded-xl'>
        <div className='max-w-[550px]'>
          <p className='font-semibold'>Welcome to KaranEstate</p>
          <h1 className='text-2xl md:text-5xl  font-bold'>Manage Your Property</h1>
          <p className='mt-2 line-clamp-2'>You will have everything nearby supermarket, buses,stations, cinemas, thethers, the Carmen neighourhood,etc</p>
        </div>
        <img src={image} alt="no"  className='md:w-[380px] md:h-[280px] relative md:top-20 w-[320px] top-14 left-11'/>
    </div>
  )
}

export default HomeBanner