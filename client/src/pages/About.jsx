import React from 'react'
import StorageIcon from '@mui/icons-material/Storage';
import NoteIcon from '@mui/icons-material/Note';
import SecurityIcon from '@mui/icons-material/Security';
import PasswordIcon from '@mui/icons-material/Password';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Footer from '../components/Footer';
import Karan from '../assets/Karan.jpg'

function About() {
  return (
    <>
      <div className='flex flex-col  items-center m-10'>
      <p className='text-gray-500'>About us</p>
      <h1 className='text-4xl font-bold mt-3'>A Proficient Team with</h1>
      <h1 className='text-4xl font-bold'>extensive knowledge</h1>
      <img className='rounded-lg my-4 w-3/4 h-[370px] object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ99K4wBKVoggsbm5Aqv7tfHq2XixJwF8kX-g&usqp=CAU" alt="" />
      <p className='text-gray-500 mt-6'>Cloud services used in project:</p>
      <div className='flex gap-9 mt-2 mb-6 font-semibold text-gray-900'>
        <div className='flex flex-col items-center'>
          <NoteIcon/>
          <p>Database</p>
        </div>
        <div className='flex flex-col items-center'>
          <StorageIcon/>
          <p>Storage</p>
        </div>
        <div className='flex flex-col items-center'>
          <SecurityIcon/>
          <p>Security</p>
        </div>
        <div className='flex flex-col items-center'>
          <PasswordIcon/>
          <p>Authentication</p>
        </div>
        <div className='flex flex-col items-center'>
          <CloudUploadIcon/>
          <p>Hosting</p>
        </div>
      </div>
      <p className='text-gray-500 mb-3'>Team Members</p>
      <div className='flex justify-between'>
        <div className='flex flex-col items-center'>
          <img className='rounded-lg w-[150px]' src={Karan} alt="" />
          <p>Karan Mharse</p>
        </div>
        <div className='flex flex-col items-center'>
          <img className='rounded-lg w-3/4' src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSq5Lifx7ydT_Zjo1B8fT56LpoL0urZJG1V-rJ_MWYda2IqJ3B0OmU5ccDLF77SbUgqf2rhL1itosI87Vaj-1TgVUWocHee6pRRIx9PdAM" alt="" />
          <p>Manish Kanojiya</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default About