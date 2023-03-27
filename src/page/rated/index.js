import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../Apikey";

const Rated = () => {
    const [rated, setRated] = useState([])

    const getRated = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=6`)
        const {data} = await url
        setRated(data.results)
    }
    console.log(rated)


    useEffect(() => {
        getRated()
    }, [])


    return (
        <div>
        </div>
    );
};

export default Rated;