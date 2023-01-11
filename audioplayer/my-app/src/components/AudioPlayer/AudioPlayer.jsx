import React, {useState, useRef,useEffect } from "react";
import "./AudioPlayer.css";
import useChillHop from "../../API/useChillHop";
import AbortController from './AudioController'


const AudioPlayer = ({ currentTrack,nextTrack,prevTrack }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const chillhop = useChillHop()[currentTrack]
    const audioRef = useRef(new Audio(chillhop.audio));
    // console.log('currentTime', currentTime)
    // console.log('audioRef', ~~audioRef.current.duration)
 
    const toggleHandler = () => {
            setIsPlaying(!isPlaying)
    }
    
    const intervalRef = useRef(null)
       
    const play = () => {
        audioRef.current.play();
        intervalRef.current = setInterval(() => {
        setCurrentTime((currentTime) => currentTime + 1);
    }, 1000);
    }

    const pause = () => {
        audioRef.current.pause();
        clearTimeout(intervalRef.current)
    }

   

    useEffect(() => {
        isPlaying ? play() : pause()
        // if (isPlaying) {
        //     play()
        // } else {
        //    pause();
        // }
    }, [isPlaying]);

    useEffect(() => {
        if (currentTime >= audioRef.current.duration) {
            setCurrentTime(0)
            setIsPlaying(false)
            audioRef.current.pause();
            // nextTrack()
        }
        
    }, [currentTime])

    
    return (
        <div className="AudioPlayer">
            <img className="coverPlayer" src={chillhop.cover} />
            <h5 className="titlePlayer name" >{chillhop.name}</h5>
            <p className="artistPlayer">{chillhop.artist}</p>
            <AbortController
                isPlaing={isPlaying}
                onTogglePlay={toggleHandler}
                onPrevClick={prevTrack}
                onNextClick={nextTrack}
                // currentTime = {audioRef.current.currentTime}
                currentTime = {currentTime}
                duration={audioRef.current.duration} />
        </div>
    )
    
}
export default AudioPlayer;