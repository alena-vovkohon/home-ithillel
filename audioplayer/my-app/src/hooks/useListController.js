import { useMemo, useState } from "react";

const useListController = (tracks = []) => {
  const [current, setCurrent] = useState(0);
  // console.log(current, tracks[current], tracks[current].id);

  const nextTrack = () => {
    console.log("nextTrack");
    if (current < tracks.length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  };

  const prevTrack = () => {
    console.log("prevTrack");
    if (current - 1 < 0) {
      setCurrent(tracks.length - 1);
      // console.log(tracks, tracks.length, current);
    } else {
      setCurrent(current - 1);
      // console.log(tracks, tracks.length, current);
    }
    // setTrackByID();
  };

  const setTrackByID = (id) => {
    console.log("id", id);
    let index = tracks.findIndex((item) => item.id === id);
    if (index > -1) {
      setCurrent(index);
    }
  };

  const currentIndex = useMemo(() => tracks[current].id, [current]);

  return { nextTrack, prevTrack, setTrackByID, current, currentIndex };
};
export default useListController;
