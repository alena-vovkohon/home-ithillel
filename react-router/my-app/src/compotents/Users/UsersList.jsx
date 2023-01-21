import React from "react";
import { useEffect, useState } from "react";
import { API_URL_USER } from "../../constants/Constants";
// import UsersData from "../../API/UsersData";
import User from "./User";
import "./User.css";

const UsersList = ({handleUser,isOpen}) => {

    // const users = UsersData();
    // console.log('users2', users);
    // console.log('data', users);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

  useEffect(() => {
      const getData = async () => {
        try{
      const response = await fetch(API_URL_USER);
      if (!response.ok) {
        throw new Error(response.status);
      }
      const resalt = await response.json();
      setItems(resalt);
      setIsLoaded(true);
      } catch (err) {
        setError(err.message);
        setIsLoaded(true);
      }
    };
    getData();
  }, []);

  const handlerOnClickAlbum = (index) => {
      console.log("handlerOnClickAlbum", index);
      handleUser(index)
  };

    if (error) {
        return <p>Error: {error.message}</p>;
    } else {
        return (
            <>
                <div className="Head">
                    <h1>Users</h1>
                </div>
                <ul className="usersList">
                
                    {items.map((item) => {
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
                                isOpen ={isOpen}
                            />
                        );
                    })}
                    {/* <User /> */}
                </ul>
            </>
        )
    }    
}
export default UsersList;