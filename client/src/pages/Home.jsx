import {useEffect,useState} from 'react'
import HomeBanner from '../components/HomeBanner'
import HotelCard from '../components/HotelCard'
import Footer from '../components/Footer'


function Home() {
  const [allListings,setAllListings] = useState([])

  useEffect(()=>{
    const start = async ()=>{
      const res = await fetch('http://localhost:6060/api/v2/listing/allListings');
      const data = await res.json()
      setAllListings(data.listings)
    }
    start()
  },[])

  // console.log(allListings)

  return (
    <div>
      <div className='p-8'>
      <HomeBanner/>
      <h1 className='font-semibold text-2xl pt-10'>Hotel List:</h1>
      <div className='grid grid-cols-2 lg:grid-cols-4  md:grid-cols-3 gap-4 pt-10'>
        {
          allListings.map((listing)=>(
            <HotelCard listing={listing} key={listing._id}/>
          ))
        }
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Home