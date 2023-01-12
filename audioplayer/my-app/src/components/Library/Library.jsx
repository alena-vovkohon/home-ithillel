
import "./Library.css";
import React, {useContext} from "react";
// import useChillHop from "../../API/useChillHop";
import TrackItem from "./TrackItem";
import { ListContext } from "../../context/ListContext";

const Library = ({chillhop}) => {
    // const chillhop = useChillHop()
    const { currentIndex, setTrackByID} = useContext(ListContext);
    const onClickTrack = (id) => {
        setTrackByID(id)
    }

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
                        isActive={item.id === currentIndex}
                        onClickList = {()=>onClickTrack(item.id)}
                    />
                )
            })}
        </ul>
  </div>;
}

export default Library;
