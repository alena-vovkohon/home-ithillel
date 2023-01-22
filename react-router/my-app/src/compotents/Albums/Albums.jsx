import React, {useState, useEffect} from "react";
import { Link,useRouteMatch} from "react-router-dom";
import { API_URL_ALBUM } from "../../constants/Constants";
import "./Albums.css";

const Albums = ({ index }) => {
    const [albums, setAlbums] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    
    const { url } = useRouteMatch()
    
    useEffect(() => {
        const getData = async () => {
            try{
        const response = await fetch(`${API_URL_ALBUM}${url}`);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const resalt = await response.json();
        setAlbums(resalt);
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
            <div className="Albums">
                <div className="Head">
                    <h1>Albums</h1>
                </div>
                <ul className="albumsList">
                    {albums.map((item) => {
                        return (
                            <li className="albums" key={JSON.stringify({ ...item })}>
                                <p><span>title:</span>{item.title}</p>
                                <Link
                                    className="link"
                                    to={`/users/${item.userId}/albums/${item.id}/photo`}>
                                    Photos
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }  
  
}
export default Albums;