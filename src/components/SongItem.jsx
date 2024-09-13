import React from 'react'
import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItem = ({image, id, name, desc}) => {

  const {playWithId} = useContext(PlayerContext);

  return (
    <div onClick={() => playWithId(id)} className='min-w-[180px] cursor-pointer p-2 px-3 rounded hover:bg-[#ffffff26]'>
        <img src={image} />
        <p className='mb-1 mt-2 font-bold'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongItem