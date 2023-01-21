import React, { useState, useEffect } from "react";
import { API_URL_PHOTO  } from "../../constants/Constants";
import "./Photos.css";

const Photos = ({ index }) => {
    const [photos, setPhotos] = useState([]);
  

      useEffect(() => {
      const getData = async () => {
          const response = await fetch(`${ API_URL_PHOTO }/${index}`);
      if (!response.ok) {
        throw new Error(response.status);
      }
      const resalt = await response.json();
      setPhotos(resalt);
    //   setIsLoaded(true);
     
    };
    getData();
      }, []);
    
    console.log(`${ API_URL_PHOTO }/${index}`)
    console.log('photos',photos)
    return (
        <>
             <ul className="albumsList">
                                <li className="albums" >
                                    <img src={photos.url} alt="" /> 
                                </li>   
                </ul>
        </>
       
    )
}
export default Photos;