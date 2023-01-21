import { useEffect, useState } from "react";
import { API_URL_USER } from "../constants/Constants";

const UsersData = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(API_URL_USER);
      // if (!response.ok) {
      //   throw new Error(response.status);
      // }
      const resalt = await response.json();
      setItems(resalt);
      setIsLoaded(true);
      // } catch (err) {
      //   setError(err.message);
      //   setIsLoaded(true);
      // }
    };
    getData();
  }, []);

  if (error) {
    return <p>Error: {error.message}</p>;
  } else {
    return <p>{items}</p>;
  }
};

export default UsersData;
