import React, {useState, useRef,useEffect, useContext } from "react";
import "./AudioPlayer.css";
import useChillHop from "../../API/useChillHop";
import AbortController from './AudioController'
import { ListContext } from "../../context/ListContext";


const AudioPlayer = ({chillhop:trecks}) => {
    const { current:currentTrack, nextTrack, prevTrack } = useContext(ListContext);

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    // const chillhop = useChillHop()[currentTrack]
    const chillhop = trecks[currentTrack]
    const audioRef = useRef(new Audio(chillhop.audio));


    // const isReady = useRef(false);

    // console.log('trecks', trecks, chillhop)
    // console.log('isReady', isReady, isReady.current)
    console.log('isPlaying', isPlaying)

 
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
    }, [isPlaying]);

    useEffect(() => {
        if (currentTime >= audioRef.current.duration) {
            setCurrentTime(0)
            setIsPlaying(false)
            audioRef.current.pause();
            // nextTrack()
        }
        
    }, [currentTime])


    useEffect(() => {
        pause()
        audioRef.current = new Audio(chillhop.audio);
        
        setCurrentTime(audioRef.current.currentTime);
        setIsPlaying(false)
        // if (isPlaying) {
        //     // setIsPlaying(false)
        //     play();
        // } 
  }, [currentTrack]);

   const onScrub = (value) => {
        // console.log(value)
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setCurrentTime(audioRef.current.currentTime);
  }
    
    return (
        <div className="AudioPlayer">
            <img className="coverPlayer" src={chillhop.cover} />
            <h5 className="titlePlayer name" >{chillhop.name}</h5>
            <p className="artistPlayer">{chillhop.artist}</p>
            <AbortController
                isPlaing={isPlaying}
                onTogglePlay={toggleHandler}
                onScrubInput = {onScrub}
                // onPrevClick={prevTrack}
                // onNextClick={nextTrack}
                // currentTime = {audioRef.current.currentTime}
                currentTime = {currentTime}
                duration={audioRef.current.duration} />
        </div>
    )
    
}
export default AudioPlayer;