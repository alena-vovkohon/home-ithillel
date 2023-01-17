import { useMemo, useState } from "react";

const useListController = (tracks = []) => {
  const [current, setCurrent] = useState(0);

  const nextTrack = () => {
    if (current < tracks.length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  };

  const prevTrack = () => {
    if (current - 1 < 0) {
      setCurrent(tracks.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const setTrackByID = (id) => {
    let index = tracks.findIndex((item) => item.id === id);
    if (index > -1) {
      setCurrent(index);
    }
  };

  const currentIndex = useMemo(() => tracks[current].id, [current]);

  return { nextTrack, prevTrack, setTrackByID, current, currentIndex };
};
export default useListController;
