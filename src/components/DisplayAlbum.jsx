import React from 'react'
import Navbar from './Navbar'
import { assets, songsData, albumsData } from '../assets/assets';
import {useParams} from 'react-router-dom'
import { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {

    const {id} = useParams();
    const albumData = albumsData[id];
    
    const {playWithId} = useContext(PlayerContext);

  return (
    <>
        <Navbar />

        <div className='mt-10 flex flex-col md:flex-row md:items-end'>

            <img src={albumData.image} className='w-48 rounded'/>

            <div className='ml-8'>
            <p>Playlist</p>
            <h1 className='mb-4 font-bold text-7xl'>{albumData.name}</h1>
            <h4>{albumData.desc}</h4>
            <p className='mt-1'>
             <img src={assets.spotify_logo} className='inline-block w-5' />
             <b>Spotify</b>
             • 1,323,154 likes
             • <b>50 songs, </b>
             about 2 hr 30 min
            </p> 
            </div>

        </div>

        <div className='grid grid-cols-3 sm:grid-cols-4 text-[#a7a7a7] pl-2 mt-10 mb-4'>
           <p><b className='mr-4'>#</b>Title</p>
           <p>Album</p>
           <p>Date Added</p>
           <img src={assets.clock_icon} className='m-auto w-4'/>
        </div>

        <hr />

        
           {
            songsData.map((item, index) => (
            <div onClick={() => playWithId(item.id)} key={index} className='text-[#a7a7a7] p-2 hover:bg-[#ffffff2b] items-center cursor-pointer grid grid-cols-3 sm:grid-cols-4 gap-2 '>
               <p className='text-white'>
              <b className='mr-4'>{index + 1}</b>
              <img src={item.image} className='inline w-10 mr-5' />
              {item.name}
          </p>
          <p className='text-[15px]'>{albumData.name}</p>
          <p className='text-[15px] hidden sm:block'>5 days ago</p>
         <p className='text-[15px] text-center'>{item.duration}</p>
            </div>
            ))
        }
           </>

    
  )
}

export default DisplayAlbum