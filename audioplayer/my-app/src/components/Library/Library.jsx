
import "./Library.css";
import React, {useContext} from "react";
import useChillHop from "../../API/useChillHop";
import TrackItem from "./TrackItem";
import { ListContext } from "../../context/ListContext";

const Library = ({chillhop}) => {
    // const chillhop = useChillHop()
    const { currentIndex } = useContext(ListContext);
    // console.log('chillhop2', chillhop)
    
    // console.log("currentIndex", currentIndex);

    return <div className="Library">
        <h2 className='Title'>Library</h2>
        <ul className='ListLibrery'>    
            {chillhop.map((item) => {
                // console.log('item.id',item.id)
                return (
                    <TrackItem
                        key={item.id}
                        name={item.name}
                        img={item.cover}
                        artist={item.artist}
                        isActive={item.id === currentIndex }
                    />
                )
            })}
        </ul>
  </div>;
}

export default Library;
