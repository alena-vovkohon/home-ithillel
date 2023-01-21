import React, {useState, useEffect} from "react";
import { Link, Route } from "react-router-dom";
import { API_URL_USER } from "../../constants/Constants";
import Photos from "../Photos/Photos";
import "./Albums.css";

const Albums = ({ index }) => {
    //  const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    const [albums, setAlbums] = useState([]);
    // const [albumId, setAlbumId] = useState(0);
    const [isOpenPhoto, setIsOpenPhoto] = useState(false);
    const[linkPoto, setLinkPoto] = useState(null)
    // const { userId } = useContext(ListContext);
    // console.log('albums1', albums)
    // console.log(`${API_URL_USER}/${index}/albums`)

  useEffect(() => {
      const getData = async () => {
      const response = await fetch(`${API_URL_USER}/${index}/albums`);
      if (!response.ok) {
        throw new Error(response.status);
      }
      const resalt = await response.json();
      setAlbums(resalt);
    //   setIsLoaded(true);
     
    };
    getData();
  }, []);
    
    // console.log('albums2', albums)
    
    const onClickPhotos = (indexAlbum) => {
        console.log('onClickPhotos', indexAlbum)
        //   setAlbumId(indexAlbum);
        setIsOpenPhoto(false)
            if (isOpenPhoto) {
            setIsOpenPhoto(false);
            } else {
            setIsOpenPhoto(true);
            }
        console.log('isOpenPhoto',isOpenPhoto)
        
    }
    
    
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
                                    <Link className="link"
                                        to={`/users/${item.userId}/albums/${item.id}/photo`}
                                        onClick={()=>onClickPhotos(item.id)}>
                                        Photos
                                    </Link>
                                    {isOpenPhoto ?
                                        (<Route path={`/users/${item.userId}/albums/${item.id}/photo`}>
                                        <Photos index={item.id} />
                                        </Route>) :
                                        null}
                                </li>
                                
                                 
                                
                            )
                        })}
                </ul>
        </div>
      )   
  
}
export default Albums;