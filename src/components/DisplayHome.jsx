import React from 'react'
import Navbar from './Navbar'
import { songsData, albumsData } from '../assets/assets'
import AlbumItem from '../components/AlbumItem'
import SongItem from '../components/SongItem'

const DisplayHome = () => {
  return (
    <>
      <Navbar />

      <div className='mb-4 mt-5'>
         <h1 className='text-white font-bold text-2xl mb-5'>Featured Charts</h1>
         <div className='flex overflow-auto'>
            {albumsData.map((item, index) => {
                return <AlbumItem id={item.id} key={index} name={item.name} desc={item.desc} image={item.image} />
            })}
          </div>     
      </div>
      <div className='mb-4 mt-5'>
         <h1 className='text-white font-bold text-2xl mb-5'>Today's Biggest Hits</h1>
         <div className='flex overflow-auto'>
            {songsData.map((item, index) => {
                return <SongItem id={item.id} key={index} name={item.name} desc={item.desc} image={item.image} />
            })}
          </div>     
      </div>
    </>
  )
}

export default  DisplayHome
