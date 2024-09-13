import React from 'react'
import { assets } from '../../../spotify-clone/src/assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <>
    <div className='w-full flex items-center justify-between'>

        <div className='flex gap-2 w-[20.6%]'>
               <img onClick={() => navigate(-1)} src={assets.arrow_left} className='cursor-pointer w-8 p-2 bg-black rounded-full' />
               <img onClick={() => navigate(1)} src={assets.arrow_right} className='cursor-pointer w-8 p-2 bg-black rounded-full' />
        </div>

        <div className='flex items-center justify-between gap-4'>
            <p className='cursor-pointer text-[15px] hidden lg:block font-semibold px-4 py-1 rounded-2xl bg-white text-black'>Explore Premium</p>
            <p className='cursor-pointer text-[15px] font-semibold px-3 py-1 rounded-2xl bg-black text-white'>Install App</p>
            <p className='cursor-pointer font-semibold text-[15px] flex items-center justify-center w-7 h-7 rounded-full bg-purple-500 text-black'>G</p>
        </div>


    </div>

    <div className='mt-4 flex justify-start items-center gap-2'>
                 <p className='bg-white px-4 py-1 rounded-2xl text-black'>All</p>
                 <p className='bg-black px-4 py-1 rounded-2xl text-white'>Music</p>
                 <p className='bg-black px-4 py-1 rounded-2xl text-white'>Podcasts</p>
                 
            </div>

    </>
  )
}

export default Navbar