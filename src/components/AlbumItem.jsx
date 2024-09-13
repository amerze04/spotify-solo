import React from 'react'
import {useNavigate} from 'react-router-dom'

const AlbumItem = ({image, id, name, desc}) => {

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`album/${id}`)} className='min-w-[180px] cursor-pointer p-2 px-3 rounded hover:bg-[#ffffff26]'>
        <img src={image} />
        <p className='mb-1 mt-2 font-bold'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default AlbumItem