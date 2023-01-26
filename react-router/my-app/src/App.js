import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UsersList from "./compotents/Users/UsersList";
import Albums from "./compotents/Albums/Albums";
import Photos from "./compotents/Photos/Photos";
import "./App.css";

// const RoutersPath = {
//   UsersList: "/users",
//   Albums: "/users/:id/albums",
//   Photos: "/users/:id/albums/:id/photo",
// };

// const Routes = [
//   {
//     path: RoutersPath.Albums,
//     render: () => <Albums />,
//   },
//   {
//     path: RoutersPath.Photos,
//     render: () => <Photos />,
//   },
//   {
//     path: RoutersPath.UsersList,
//     render: () => <UsersList />,
//   },
// ];

function App() {
  return (
    <Router>
      <div className="App">
        <div className="linkUsers">
          <Link to="/users">Users</Link>
        </div>
        <Switch>
          <Route path={"/users/:id/albums/:id/photo"}>
            <Photos />
          </Route>
          <Route path={"/users/:id/albums"}>
            <Albums />
          </Route>
          <Route path={"/users"}>
            <UsersList />
          </Route>
        </Switch>
        {/* <Switch>
          {Routes.map((item) => (
            <Route path={item.path} render={item.render} />
          ))}
        </Switch> */}
      </div>
    </Router>
  );
}
export default App;
