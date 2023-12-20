import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const [userDetails,setUserDetails] = useState(null)
    const navigate = useNavigate()
    function logoutHandler(){
        localStorage.removeItem('userDetails')
navigate('/')
    }

    useEffect(()=>{
        setUserDetails(localStorage.getItem('userDetails'))
    })
  return (
    <div className='w-full py-4 flex justify-around items-center text-white bg-gray-800'>
      <div className="logo text-3xl font-bold ">
        Bloger
      </div>
      <div>

        {
            userDetails && <button className='bg-blue-400 px-4 py-2 rounded-md' onClick={logoutHandler}>Logout</button>
        }
      </div>
    </div>
  )
}

export default Header
