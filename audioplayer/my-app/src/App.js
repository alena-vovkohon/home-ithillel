import React from "react";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import Library from "./components/Library/Library";
import "./App.css";
import useListController from "./hooks/useListController";
import useChillHop from "./API/useChillHop";
import { ListContext } from "./context/ListContext";

function App() {
  const chillhop = useChillHop();
  const controller = useListController(chillhop);

  return (
    <ListContext.Provider value={controller}>
      <div className="App">
        <Library chillhop={chillhop} />
        <AudioPlayer chillhop={chillhop} />
      </div>
    </ListContext.Provider>
  );
}

export default App;
