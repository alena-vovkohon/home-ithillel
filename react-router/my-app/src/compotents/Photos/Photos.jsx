import React, { useState, useEffect } from "react";
import { API_URL_PHOTO  } from "../../constants/Constants";
import {useParams} from "react-router-dom";
import "./Photos.css";

const Photos = ({ index }) => {
    const [photos, setPhotos] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const {id} = useParams()

    useEffect(() => {
        const getData = async () => {
            try{
        const response = await fetch(`${ API_URL_PHOTO }/${id}`);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const resalt = await response.json();
        setPhotos(resalt);
        setIsLoaded(true);
        } catch (err) {
            setError(err.message);
            setIsLoaded(true);
        }
        };
        getData();
    }, []);

    return (
        <>
            <div className="Photos">
                <img src={photos.url} alt="" />   
            </div>
        </>
    )
}
export default Photos;