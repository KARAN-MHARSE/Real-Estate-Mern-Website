import React from 'react'

function CreateListing() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
        <h1 className='text-3xl text-center font-semibold my-7'>Create a Listing</h1>
        <form className='flex flex-col sm:flex-row gap-4'>
            <div className='flex flex-col gap-4 flex-1'>
                <input type="text" placeholder='Name' className='border p-3 rounded-lg' id="name" />
                <textarea type="text" placeholder='Description' className='border p-3 rounded-lg' id="name" />
                <input type="text" placeholder='Address' className='border p-3 rounded-lg' id="name" />
                <div className='flex gap-6 flex-wrap'>
                    <div className='flex gap-2'>
                        <input type="checkbox" className='w-5' id="" />
                        <span>Sell</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" className='w-5' id="" />
                        <span>Rent</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" className='w-5' id="" />
                        <span>Parking spot</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" className='w-5' id="" />
                        <span>Furmished</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" className='w-5' id="" />
                        <span>Offer</span>
                    </div>
                </div>
                <div className='flex flex-wrap gap-8'>
                    <div className='flex items-center gap-2'>
                        <input type="number" defaultValue='1' min='1' max='1' required id="" className='p-3 rounded-lg border-gray-700' />
                        <span>Beds</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="number" defaultValue='1' min='1' max='1' required id="" className='p-3 rounded-lg border-gray-700' />
                        <span>Baths</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="number" defaultValue='500' min='1' max='1' required id="" className='p-3 rounded-lg border-gray-700' />
                        <span>Regular price</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="number" defaultValue='400' min='1' max='1' required id="" className='p-3 rounded-lg border-gray-700' />
                        <span>Discounted price</span>
                    </div>
                    
                </div>
            </div>
            {/* End of left form */}
            <div className='flex flex-col flex-1'>
                <p className='font-semibold'>Images:
                 <span className='font-normal text-gray-600 ml-1'> The First image will be cover (max 6)</span>
                </p>
                <div className='flex my-5 gap-3'>
                    <input type="file"  id="images" accept='images/*' multiple className='bg-white p-2 rounded-lg' />
                    <button className='p-3 bg-white-500 border border-green-700 text-green-700 font-semibold hover:shadow-lg rounded-lg'>UPLOAD</button>
                </div>
                <button className='p-3 bg-slate-700 text-white font-bold rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Create Listing</button>
            </div>
           
        </form>
    </main>
  )
}

export default CreateListing