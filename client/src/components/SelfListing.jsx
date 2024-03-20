import React from 'react'

function SelfListing({listing}) {
    // console.log(listing)
  return (
    <div className="flex gap-5 bg-slate-300 mx-auto w-3/4 rounded-lg p-3">
        <img src={listing.imageUrl} alt="image" className='w-2/4 rounded-lg'/>
        <div>
            <h1 className='text-2xl font-semibold'>{listing.name}</h1>
            <p className='text:sm  font-semibold line-clamp-3'>listing.description</p>
        </div>

    </div>
  )
}

export default SelfListing