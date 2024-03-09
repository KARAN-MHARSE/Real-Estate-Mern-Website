import { current } from '@reduxjs/toolkit'
import React from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

function Profile() {
    const {currentUser} = useSelector(state => state.user)

  return (
    <div className='max-w-lg mx-auto flex flex-col '>
        <h1 className='text-3xl my-8 font-semibold mx-auto'>Profile</h1>
        <img  src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" className='h-24 w-24 text-center rounded-full object-cover self-center' /> 
        <form className='mt-6 flex flex-col gap-3  mx-auto w-3/4'>
            <input type="text" placeholder="Fullname" defaultValue={currentUser? currentUser.user.fullName: null} id="" className='p-2 rounded-lg '/>
            <input type="text" placeholder="Email" defaultValue={currentUser? currentUser.user.email: null} id="" className='p-2 rounded-lg '/>
            <input type="text" placeholder="Password" id="" className='p-2 rounded-lg '/>
            <button type="submit" className='p-2 bg-slate-700 rounded-lg  text-white font-semibold'>UPDATE</button>
        </form>
        <Link to='/create-listing'>
            <p className='bg-green-700 w-3/4 p-2 text-center text-white font-semibold rounded-lg mt-3 mx-auto'>CREATE LISTING</p>
        </Link>        
        <div className='flex mt-3  text-red-700 text-sm mx-auto gap-5'>
            <p >Delete Account</p>
            <p>||</p>
            <p>Sign out</p>
        </div>
        
    </div>
  )
}

export default Profile