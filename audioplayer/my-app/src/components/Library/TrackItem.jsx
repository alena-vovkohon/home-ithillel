import React from "react";
import "./Library.css";

const TrackItem = ({name,img,artist, isActive}) => {
    return (
        <li
        className={`color-backdrop ${isActive ? "active" : "itemSong"}`}
        >
            <img className="cover" src={img} />
            <div>
                <h5 className="title" >{name}</h5>
                <p className="artist">{artist}</p>  
            </div>

        </li>
    )
    
}
export default TrackItem;