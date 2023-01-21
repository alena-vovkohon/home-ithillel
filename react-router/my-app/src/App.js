import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createContext } from "react";
import UsersList from "./compotents/Users/UsersList";
import Albums from "./compotents/Albums/Albums";
import Photos from "./compotents/Photos/Photos";
import "./App.css";

function App() {
  const [userId, setUserId] = useState(0);
  // const [albumId, setAlbumId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  // console.log("App", isOpen);

  const onClickUser = (index) => {
    console.log("onClickUser", index);
    setUserId(index);
    setIsOpen(false);
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
    console.log("isOpen", isOpen);
  };

  return (
    // <ListContext.Provider value={userId}>
    <>
      <Router>
        <li className="linkUsers">
          <Link to="/users">Users</Link>
        </li>
        <Switch>
          <Route path={"/users"}>
            <UsersList handleUser={onClickUser} isOpen={isOpen} />
          </Route>
          {/* <Route path={`/users/${userId}/albums`}>
            <Albums isOpen={isOpen} />
          </Route> */}
          {/* <Route path={`/photos/${albumId}`}>
            <Photos />
          </Route> */}
        </Switch>
      </Router>
    </>
    // </ListContext.Provider>
  );
}
export default App;

{
  /* <nav>
  <ul>
    <li>
      <Link to="/users">Users</Link>
    </li>
    <li>
      <Link to="/albums">Albums</Link>
    </li>
    <li>
      <Link to="/photos">Photos</Link>
    </li>
  </ul>
</nav>; */
}
