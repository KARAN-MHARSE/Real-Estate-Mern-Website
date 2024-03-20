import React from 'react'
import {useParams} from 'react-router-dom'
import image from '../assets/image.png'

function ListingDetail() {
  const {id} = useParams()
  console.log(id)

  return (
    <div className='p-8 text-[0.8rem]'>
      <div>
        <img className= "size-2/4 mx-auto" src={image} alt="" />
        <h1 className='text-3xl font-bold'>Sobha Hearland II Villas</h1>
        <p >At kedurli, Murbad</p>
        <table className='border'>
          <tr className='border'>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
        </table>
        <h1>Description</h1>
        <p>lorem32</p>
      </div>
      {/* Right */}
      <div>
      </div>
    </div>
  )
}

export default ListingDetail