import React from "react";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import Library from "./components/Library/Library";
import "./App.css";
import useListController from "./hooks/useListController";
import useChillHop from "./API/useChillHop";

function App() {
  const chillhop = useChillHop();
  const { current, setTrackById, nextTrack, prevTrack, currentIndex } =
    useListController(chillhop);
  // console.log("current", current);
  return (
    <div className="App">
      <Library
        // currentTrack={current}
        // setTrackById={setTrackById}
        currentIndex={currentIndex}
      />
      <AudioPlayer
        currentTrack={current}
        nextTrack={nextTrack}
        prevTrack={prevTrack}
      />
    </div>
  );
}

export default App;
