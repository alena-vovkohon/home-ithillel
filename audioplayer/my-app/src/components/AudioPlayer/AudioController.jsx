import React, {useContext} from "react";
import "./AudioPlayer.css";
import { ReactComponent as Play } from '../../images/play.svg';
import { ReactComponent as Pause } from '../../images/pause.svg';
import { ReactComponent as Next } from '../../images/next.svg'; 
import { ReactComponent as Prev } from '../../images/prev.svg';
import { secondToMinutes } from '../../Utils'
import { ListContext } from "../../context/ListContext";

const AudioController = ({isPlaying, onTogglePlay, currentTime, duration, onScrubInput,onScrubEndInput}) => {
    const { nextTrack, prevTrack } = useContext(ListContext);
  
    return (
        <div className="AudioController">
            <h5 className="titlePlayer">Player</h5>
            <div className="player">
                <p className="currentTime">{ secondToMinutes(currentTime) }</p>
                       <input
                            type="range"
                            value={currentTime}
                            step="1"
                            min='0'
                            max={duration ? duration : '0'}
                            className="progress"
                            onChange = {(e) => onScrubInput(e.target.value)}
                            onMouseUp={onScrubEndInput}
                        />
                <p className="duration">{ secondToMinutes(duration) }</p>
            </div>

            <div className="controler">
              <button
                type="button"
                className="prev"
                aria-label="Prev"
                 onClick={prevTrack}
            >
                <Prev/>
                </button>
                {isPlaying ? (
                    <button
                        type="button"
                        className="togglePlay"
                        onClick={() => onTogglePlay(false)}
                        aria-label="Pause"
                    >
                        <Pause />
                    </button>
                ) : (
                    <button
                        type="button"
                        className="togglePlay"
                        onClick={() => onTogglePlay(true)}
                        aria-label="Play"
                    >
                        <Play />
                    </button>
                )}
            <button
                type="button"
                className="next"
                aria-label="Next"
                onClick={nextTrack}
            >
                <Next/>
            </button>   
            </div>
           
        </div>
    )
    
}
export default AudioController;