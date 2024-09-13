import React from 'react'
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='h-[15%] rounded flex flex-col justify-around bg-[#121212]'>
            <div className='flex justify-start pl-8 items-center gap-3 cursor-pointer'>
            <img className="w-6" src={assets.home_icon} alt="" />
            <p className='font-bold'>Home</p>
            </div>
            <div className='flex justify-start pl-8 items-center gap-3 cursor-pointer'>
            <img className="w-6" src={assets.search_icon} alt="" />
            <p className='font-bold'>Search</p>
            </div>
        </div>

        <div className='p-2 gap-4 bg-[#121212] h-[85%] rounded lg:flex hidden text-white flex-col'>
            <div className='flex justify-between p-2 items-center'>
                 <div className='flex items-center'>
                    <img src={assets.stack_icon} className='w-8'/>
                    <p className='font-semibold ml-3'>Your Library</p>
                 </div>
                 <div className='flex'>
                    <img className='w-5 cursor-pointer' src={assets.arrow_icon} alt="" />
                    <img className='w-5 ml-3 cursor-pointer' src={assets.plus_icon} />
                 </div>
            </div>

            <div className='p-4 rounded bg-[#242424] flex flex-col justify-center items-start'>
                <h1 className='font-semibold mb-1'>Create your first playlist</h1>
                <p className='mb-5 font-thin'>it's easy we will help you</p>
                <button className='text-[15px] text-black bg-white cursor-pointer px-4 py-1.5 rounded-full font-semibold'>Create Playlist</button>
            </div>

            <div className='p-4 rounded bg-[#242424] flex flex-col justify-center items-start'>
                <h1 className='font-semibold mb-1'>Let's find some podcast to follow</h1>
                <p className='mb-5 font-thin'>we'll keep you up to date on new episodes</p>
                <button className='text-[15px] text-black bg-white cursor-pointer px-4 py-1.5 rounded-full font-semibold'>Browse Podcasts</button>
            </div>
        </div>

    </div>
  )
}

export default Sidebar