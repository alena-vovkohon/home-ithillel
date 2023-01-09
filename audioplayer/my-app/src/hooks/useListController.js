import { useState } from "react";

const useListController = () => {
  const [current, setCurrent] = useState(0);

  const nextTrack = () => {};
  const prevTrack = () => {};
  const setTrackByID = (id) => {};

  return { nextTrack, prevTrack, setTrackByID, current };
};
export default useListController;
