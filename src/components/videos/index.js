import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../Apikey";

const Videos = ({id}) => {
    const [videos, setVideos] = useState([])
    const getVideos = async (id, key) => {
        const res = await axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIKEY}&language=en-US`)
        const {data} = await res
        setVideos(data)
    }
    useEffect(()=>{
        getVideos(id,APIKEY)
    },[])
    console.log(videos)
    return (
        <div>

        </div>
    );
};

export default Videos
