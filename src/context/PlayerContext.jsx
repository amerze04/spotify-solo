import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { createContext } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

export default function PlayerContextProvider(props) {

    const audioRef = useRef();
    const seekBar = useRef();
    const seekBg = useRef();

    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState();
    const [time , setTime] = useState({
        currentTime: {
            minutes: 0,
            seconds: 0
        },

        totalTime: {
            minutes: 0,
            seconds: 0
        }

    });

    function play() {
         audioRef.current.play();
         setPlayStatus(true);
    }

    function pause() {
        audioRef.current.pause();
        setPlayStatus(false);
    }



const playWithId = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayStatus(true);
}

const next = async (id) => {
    if(id < songsData.length - 1){
        await setTrack(songsData[id+1]);
        await audioRef.current.play(); 
        setPlayStatus(true);
    }
}

const previous = async (id) => {
    if(id > 0){
        await setTrack(songsData[id-1]);
        await audioRef.current.play(); 
        setPlayStatus(true);
    };
}

const seekSong = async (e) => {
    audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration);
}

useEffect(() => {
    setTimeout(() => {
    audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%";
        setTime({
            currentTime: {
                minutes: Math.floor(audioRef.current.currentTime / 60),
                seconds: Math.floor(audioRef.current.currentTime % 60)
                
            },
    
            totalTime: {
                minutes: Math.floor(audioRef.current.duration / 60),
                seconds: Math.floor(audioRef.current.duration % 60)
            }
    
        });
        
    }},1000)}, [audioRef]);

    const contextValue = {
        audioRef,
        track, setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        seekBar, seekBg,
        play, pause,
        playWithId,
        next, previous,
        seekSong
    
    }


    return (
      <PlayerContext.Provider value={contextValue}>
        {props.children}
      </PlayerContext.Provider>
    )
}