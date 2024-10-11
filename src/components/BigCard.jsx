import React from 'react'
import Profile from './Profile'

const BigCard = () => {
  return (
    <div className='h-[360px] w-[700px] bg-[#202222] rounded-md overflow-hidden'>
        <div className='bg-pink-100 w-full h-3/5'>
                <img alt="David Lynch's Interview Project" className="object-cover h-full w-full" src="https://pplx-res.cloudinary.com/image/upload/t_limit/v1728181218/getty_uploads/870140864.jpg"></img>
        </div>
        <div className="h-2/5 flex flex-col p-3">
            <h1 className='text-xl text-white font-semibold'>China Has the Most Powerful Laser</h1>
            <p className='text-base text-[#868787] mr-7 ' style={{maxWidth: '100%',display: '-webkit-box',WebkitBoxOrient: 'vertical',WebkitLineClamp: 2,overflow: 'hidden',textOverflow: 'ellipsis',}}>Chinese scientists have achieved a breakthrough in laser technology with the development of the world's most powerful "sound laser," emitting particles of sound instead of light</p>
            <Profile />
        </div>
    </div>
  )
}

export default BigCard