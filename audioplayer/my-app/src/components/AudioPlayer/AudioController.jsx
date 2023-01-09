import React from "react";
import "./AudioPlayer.css";
import { ReactComponent as Play } from '../../images/play.svg';
import { ReactComponent as Next } from '../../images/next.svg'; 
import { ReactComponent as Prev } from '../../images/prev.svg';
import { secondToMinutes } from '../../Utils'

const AudioController = ({isPlaying, onTogglePlay, currentTime, duration}) => {
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
                            max={duration ? duration : `${duration}`}
                            className="progress"
                            // onChange={(e) => onScrub(e.target.value)}
                            // onMouseUp={onScrubEnd}
                            // onKeyUp={onScrubEnd}
                        />
                <p className="duration">{ secondToMinutes(duration) }</p>
            </div>

            <div className="controler">
              <button
                type="button"
                className="prev"
                // aria-label="Previous"
                // onClick={onPrevClick}
            >
                <Prev/>
            </button>
             <button
                type="button"
                className="play"
                onClick={onTogglePlay}
                // aria-label="Pause"
            >
                {/* {isPlaing} */}
                <Play/>
            </button>

             <button
                type="button"
                className="next"
                // aria-label="Next"
                // onClick={onNextClick}
            >
                <Next/>
            </button>   
            </div>
           
        </div>
    )
    
}
export default AudioController;