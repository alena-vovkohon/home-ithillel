import React from "react";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import Library from "./components/Library/Library";
import "./App.css";
import useListController from "./hooks/useListController";

function App() {
  const { current, setTrackById, nextTrack, prevTrack } = useListController();
  // console.log("current", current);
  return (
    <div className="App">
      <Library currentTrack={current} setTrackById={setTrackById} />
      <AudioPlayer
        currentTrack={current}
        nextTrack={nextTrack}
        prevTrack={prevTrack}
      />
    </div>
  );
}

export default App;
