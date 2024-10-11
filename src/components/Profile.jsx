import React from 'react'
import { FaRegBookmark } from "react-icons/fa6";

const Profile = () => {
  return (
    <div className='flex justify-between mt-auto cursor-pointer'>
        <div className='flex'>
            <img className='h-5 w-5 rounded-full mr-2' src="https://imagedelivery.net/MPdwyYSWT8IY7lxgN3x3Uw/831bd9b7-78f7-4d06-7380-44809b816500/thumbnail" alt="" />
            <p className='text-[#8D9191] text-sm'>elymc</p>
        </div>
        <div className=' text-[#8D9191] text-sm p-1 rounded-full hover:bg-[#2D2F2F] hover:text-white'><FaRegBookmark /></div>
    </div>
  )
}

export default Profile