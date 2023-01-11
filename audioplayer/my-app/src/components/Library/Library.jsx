
import "./Library.css";
import React from "react";
import useChillHop from "../../API/useChillHop";
import TrackItem from "./TrackItem";

const Library = ({currentIndex}) => {
    const chillhop = useChillHop()
    console.log("currentIndex", currentIndex);

    return <div className="Library">
        <h2 className='Title'>Library</h2>
        <ul className='ListLibrery'>    
            {chillhop.map((item) => {
                console.log('item.id',item.id)
                return (
                    <TrackItem
                        
                        key={item.id}
                        name={item.name}
                        img={item.cover}
                        artist={item.artist}
                        isActive={false}
                    />
                )
            })}
        </ul>
  </div>;
}

export default Library;
