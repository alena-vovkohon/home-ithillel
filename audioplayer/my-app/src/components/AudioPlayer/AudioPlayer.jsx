import React, {useState, useRef, useEffect, useContext } from "react";
import "./AudioPlayer.css";
// import useChillHop from "../../API/useChillHop";
import AbortController from './AudioController'
import { ListContext } from "../../context/ListContext";


const AudioPlayer = ({chillhop:tracks}) => {
    const { current:currentTrack, nextTrack } = useContext(ListContext);

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const chillhop = tracks[currentTrack]
    const audioRef = useRef(new Audio(chillhop.audio));
    const intervalRef = useRef()

    const play = () => {
        audioRef.current.play();
        // intervalRef.current = setInterval(() => {
        //       if (audioRef.current.ended) {
        //         nextTrack();
        //     }
        //     setCurrentTime(audioRef.current.currentTime);
        // }, 1000);
        startTimer()
    }

    const pause = () => {
        audioRef.current.pause();
        clearTimeout(intervalRef.current)
    }

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                nextTrack();
            }
            setCurrentTime(audioRef.current.currentTime);
        }, 1000);
    }; 

    useEffect(() => {
        isPlaying ? play() : pause()
    }, [isPlaying]);

    useEffect(() => {
        pause()
        audioRef.current = new Audio(chillhop.audio);
        setCurrentTime(audioRef.current.currentTime);
        if (isPlaying) {
            play();
        } else {
            setIsPlaying(false)
            pause()
        }
    }, [currentTrack]);

    const onScrub = (value) => {
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = value;
        setCurrentTime(audioRef.current.currentTime);
   }
 
    const onScrubEnd = () => {
        if (!isPlaying) {
            setIsPlaying(true)
        }
        clearInterval(intervalRef.current);
        startTimer()
    }
    
    return (
        <div className="AudioPlayer">
            <img className="coverPlayer" src={chillhop.cover} />
            <h5 className="titlePlayer name" >{chillhop.name}</h5>
            <p className="artistPlayer">{chillhop.artist}</p>
            <AbortController
                isPlaying={isPlaying}
                onTogglePlay={setIsPlaying}
                onScrubInput={onScrub}
                onScrubEndInput = {onScrubEnd}
                currentTime = {currentTime}
                duration={audioRef.current.duration} />
        </div>
    )
    
}
export default AudioPlayer;