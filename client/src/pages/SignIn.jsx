import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {signInStart,signInFailure, signInSuccess} from '../redux/user/userSlice'

function SignIn() {
  const [formData,setFormData] = useState({})
  const {loading,error} = useSelector((state)=>state.user)
  console.log(loading)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e) =>{
    setFormData({...formData,[e.target.id]:e.target.value})
  }
  // console.log(formData)
  const handleClick = async(e)=>{
    e.preventDefault()
    try {
      console.log(loading)
      dispatch(signInStart())

    const res = await fetch('https://real-estate-mern-website-u3yx.onrender.com/api/v2/user/auth/signIn',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    })

    const data = await res.json()
    if(data.error== true){
      dispatch(signInFailure(data.message))
      console.log(error)
      return;
    }
    dispatch(signInSuccess(data))
    navigate('/')
    } catch (error) {
      dispatch(signInFailure(error.message))
    }
  }

  return (
    <div className=' max-w-lg mx-auto p-3'>
        <h1 className='my-7 text-center font-semibold text-3xl'>Sign In</h1>
        <form onSubmit={handleClick} className='flex flex-col gap-3'>
            <input type="email" onChange={handleChange} id='email' placeholder='email' className='bg-slate-200 p-2 rounded-lg border' />
            <input type="password" onChange={handleChange} id='password'  placeholder='password' className='bg-slate-200 p-2 rounded-lg border'/>
            <button disabled={loading}  className='bg-slate-700 p-2 rounded-lg border font-semibold text-white'>
              {loading? "Loading..." : "SIGN IN"}
            </button>
        </form>
        <p className='bg-red-700 p-2 rounded-lg border text-white text-center mt-3 font-semibold'>SIGN IN USING GOOGLE</p>
        <div className='flex gap-2 mt-3'>
            <p>Don't have an account?</p>
            <Link to='/sign-out'>
                <span className='text-blue-700 font-semibold'>Sign Up</span>
            </Link>
        </div>
        {error? <p className='text-blue-700 pt-3 truncate'>Error: {error}</p> : ""}
    </div>
  )
}

export default SignIn