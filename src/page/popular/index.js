import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../Apikey";
import MovieCard from "../../components/Card/movieCard";
import './style.scss'

const Popular = () => {
    const [popular, setPopular] = useState([])
    const [page, setPage] = useState(1)

    const getPopular = async () => {
        const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=${page}`)
        const {data} = await res
        setPopular(data.results)
    }
    console.log(popular)

    useEffect(() => {
        getPopular()
    }, [page])

    return (
        <div id="movie" style={{background:"#252424"}}>
            <div className="container">
                <div className="movie">
                    {
                        popular.map(el => (
                            <MovieCard key={el.id} el={el}/>
                        ))
                    }
                </div>
                <div className="button-page d-flex justify-content-sm-between gap-5 py-5">
                    <button onClick={() => setPage(page === 1 ? page: page - 1)}>prev</button>
                    <button onClick={() => setPage(page +1)}>Next</button>
                </div>
            </div>

        </div>
    );
};

export default Popular;
