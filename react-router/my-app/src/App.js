import React from "react";
import usersData from "./API/usersData";
import User from "./compotents/Users/User";
import "./App.css";

function App() {
  const users = usersData();
  console.log(users);

  const handlerOnClickAlbum = (index) => {
    console.log("handlerOnClickAlbum", index);
  };

  return (
    <div className="App">
      <div className="Head">
        <h1>Users</h1>
      </div>
      <ul className="usersList">
        {users.map((item) => {
          // console.log("item", item);
          return (
            <User
              key={JSON.stringify({ ...item })}
              name={item.name}
              id={item.id}
              userName={item.username}
              email={item.email}
              address={item.address}
              phone={item.phone}
              website={item.website}
              company={item.company}
              onClickAlbum={() => handlerOnClickAlbum(item.id)}
            />
          );
        })}
      </ul>
    </div>
  );
}
export default App;
