import { createContext } from "react";

export const ListContext = createContext({
  userId: 0,
  albumId: 0,
  isOpen: false,
});
