import React from "react";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import Library from "./components/Library/Library";
import "./App.css";
import useListController from "./hooks/useListController";
import useChillHop from "./API/useChillHop";
import { ListContext } from "./context/ListContext";

function App() {
  const chillhop = useChillHop();
  // const { current, setTrackById, nextTrack, prevTrack, currentIndex } =
  //   useListController(chillhop);
  const controller = useListController(chillhop);
  // console.log("controller", controller);

  return (
    <ListContext.Provider value={controller}>
      <div className="App">
        <Library
          chillhop={chillhop}
          // currentIndex={currentIndex}
        />
        <AudioPlayer
          chillhop={chillhop}
          // currentTrack={current}
          // nextTrack={nextTrack}
          // prevTrack={prevTrack}
        />
      </div>
    </ListContext.Provider>
  );
}

export default App;
