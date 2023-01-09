
import "./Library.css";
import React from "react";
import useChillHop from "../../API/useChillHop";
import TrackItem from "./TrackItem";

const Library = () => {
    const chillhop = useChillHop()
    // console.log("songs", useChillHop());

    return <div className="Library">
        <h2 className='Title'>Library</h2>
        <ul className='ListLibrery'>    
            {chillhop.map((item) => {
                return (
                    <TrackItem
                        key={item.id}
                        name={item.name}
                        img={item.cover}
                        artist={item.artist}
                    />
                )
            })}
        </ul>
  </div>;
}

export default Library;
