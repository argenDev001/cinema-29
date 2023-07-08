import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../Apikey";
import MovieCard from "../../components/Card/movieCard";

const Rated = () => {
    const [rated, setRated] = useState([])
    const [page, setPage] = useState(1)

    const getRated = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=${page}`)
        const {data} = await url
        setRated(data.results)
    }
    console.log(rated)


    useEffect(() => {
        getRated()
    }, [page])


    return (
        <div id='movie' style={{background: "#252424"}}>
            <div className="container">
                <div className="movie">
                    {
                        rated.map(el => <MovieCard el={el}/>)
                    }
                </div>
                <div className="btn-page button-page d-flex justify-content-sm-between gap-5 py-5">
                    <button onClick={() => setPage(page === 1 ? page : page - 1)}>prev</button>
                    <button onClick={() => setPage(page + 1)}>Next</button>
                </div>
            </div>

        </div>
    );
};

export default Rated;