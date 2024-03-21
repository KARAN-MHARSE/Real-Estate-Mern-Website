import {useParams} from 'react-router-dom'
import {useEffect,useState} from 'react'


function ListingDetail() {
  const {id} = useParams()
  const [listing,setListing] = useState([])
  
  useEffect(()=>{
    const start = async()=>{
      const res = await fetch(`https://real-estate-mern-website-u3yx.onrender.com/api/v2/listing/listingById/${id}`)
      const data = await res.json()
      // console.log(data)
      setListing(data.listing)
      
    }
    start()
  },[])
  console.log(listing)
  return (
    <div className=' m-2  flex gap-7'>
      {/* Left */}
      <div className='flex-1 my-auto'>
      <img className='w-[90%] object-cover m-9 rounded-lg' src={listing.imageUrl}/>
        
      </div>
      {/* Right */}
      <div className='flex-1 mt-9'>
        <h1 className='text-3xl font-bold'>{listing.name}</h1>
        <p className='text-md text-gray-500'><span className='font-semibold'>Address: </span>{listing.address}</p>
        <p className='text-md text-gray-500'><span className='font-semibold'>Desciption: </span>{listing.description}</p>
        <div className='flex my-5 font-bold' id="price">
          <p className='cross'>₹{listing.regularPrice}/</p>
          <p>₹{listing.discountPrice}</p>
        </div>

        <div className='flex justify-between border p-1'>
          <div className='flex flex-col items-center'>
            <p className='font-bold'>Type</p>
            <p>{listing.type == 'Rent' ? 'rent':'Sell'}</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='font-bold'>Beds</p>
            <p>{listing.bedRoom}</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='font-bold'>Bathrooms</p>
            <p>{listing.bathRoom}</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='font-bold'>Parking</p>
            <p>{listing.parking == true? 'Yes': 'No'}</p>
          </div>
        </div>
        <p className='mt-5 font-bold underline'>Details</p>
        <div className='flex flex-col gap-1 font-semibold'>
          <p>Type:{listing.type}</p>
          <p>Parking:{listing.parking == true? "Yes":"No"}</p>
          <p>Furnished:{listing.furnished == true?"Yes":"No"}</p>
          <p>Offer:{listing.offer == true?"Yes":"No"}</p>
          <p>Beds:{listing.bedRoom}</p>
          <p>Bathroom:{listing.bathRoom}</p>
        </div>
        <button className='p-2 mt-7 bg-slate-600 rounded-lg w-[100%] mx-auto'>Add to Save List</button>
      </div>
      
    </div>
  )
}

export default ListingDetail