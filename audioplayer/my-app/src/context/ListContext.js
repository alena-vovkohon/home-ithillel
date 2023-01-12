import { createContext } from "react";

export const ListContext = createContext({
  // currentTrack={current}
  // nextTrack={nextTrack}
  // prevTrack={prevTrack}
  // currentIndex={currentIndex}

  nextTrack: () => {},
  prewTrack: () => {},
  current: 0,
  //   setTrackByID: (id) => {},
  currentId: 0,
});
