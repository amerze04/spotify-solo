import React from 'react'
import {assets, songsData} from '../assets/assets'
import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {

    const {seekSong, seekBg, time, track, play, pause, playStatus, seekBar, next, previous} = useContext(PlayerContext);

    

  return (
    <div className=' h-[10%] flex bg-black items-center justify-between px-4 py-6'>

        <div className='hidden lg:flex items-center gap-4'>
            <img src={track.image} className='w-12' />
            <div className='flex flex-col text-white'>
                <p>{track.name}</p>
                <p>{track.desc.slice(0, 12)}</p>
            </div>
        </div>

        <div className='flex mx-auto items-center justify-center flex-col gap-1 w-[80%] lg:w-[39.8%]'>
            <div className='flex justify-between items-center w-[24%]'>
            <img className='cursor-pointer w-4' src={assets.shuffle_icon}/>
                  <img onClick={() => previous(track.id)}  className='cursor-pointer w-4' src={assets.prev_icon}/>
                  {playStatus ? 
                  <img onClick={pause} className='cursor-pointer w-4' src={assets.pause_icon}/> :
                  <img onClick={play} className='cursor-pointer w-4' src={assets.play_icon}/>}
                  <img onClick={() => next(track.id)} className='cursor-pointer w-4' src={assets.next_icon}/>
                  <img className='cursor-pointer w-4' src={assets.loop_icon}/>
            </div>

            <div className='flex items-center justify-between w-[100%]'>
                <p className='text-white'>{time.currentTime.minutes}:{time.currentTime.seconds}</p>
                <div onClick={seekSong} ref={seekBg} className='bg-gray-50 w-[90%] max-w-[500px] rounded-full cursor-pointer'>
                   <hr ref={seekBar} className='bg-green-600 w-0 h-1 border-none'/>
                </div>
                <p className='text-white'>{time.totalTime.minutes}:{time.totalTime.seconds}</p>
            </div>
        </div>

        <div className='w-[16.4%] hidden lg:flex justify-between items-center'>
            <img src={assets.plays_icon} className='w-4'/>
               <img src={assets.mic_icon} className='w-4'/>
               <img src={assets.queue_icon} className='w-4'/>
               <img src={assets.speaker_icon} className='w-4'/>
               <img src={assets.volume_icon} className='w-4'/>
               <div className='w-20 bg-slate-50 h-1 rounded'></div>
               <img src={assets.mini_player_icon} className='w-4'/>
               <img src={assets.zoom_icon} className='w-4'/>
            </div>

    </div>
  )
}

export default Player