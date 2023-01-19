import { useMemo, useState } from "react";

const useListController = (users = []) => {
  const [indexUser, setIndexUser] = useState(0);

  const setTrackByID = (id) => {
    let index = users.findIndex((item) => item.id === id);
    // if (index > -1) {
    //   setCurrent(index);
    // }
    console.log(index);
  };

  const userIndex = useMemo(() => users[indexUser].id, [indexUser]);

  return { setTrackByID, indexUser, userIndex };
};
export default useListController;
