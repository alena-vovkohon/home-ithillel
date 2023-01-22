import React from "react";
import { useEffect, useState } from "react";
import { API_URL_USER } from "../../constants/Constants";
import User from "./User";
import "./User.css";

const UsersList = () => {
    
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
                        return (
                            <User
                                key={JSON.stringify({ ...item })}
                                user={item}
                            />
                        );
                    })}
                </ul>
            </>
        )
    }    
}
export default UsersList;