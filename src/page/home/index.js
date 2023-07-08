import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../Apikey";
import MovieCard from "../../components/Card/movieCard";
import './style.scss'

const Home = () => {

    const [nowPlaying, setNowPlaying] = useState([])
    const [page, setPage] = useState(1)
    const getNowPlaying = async () => {
        const playing = await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=${page}`)
        const {data} = await playing
        setNowPlaying(data.results)
    }

    console.log(nowPlaying)
    useEffect(() => {
        getNowPlaying().then()
    }, [page])

    return (
        <div id="playing" style={{background: "#252424"}}>
            <div className="container">
                <div className="playing">
                    {
                        nowPlaying.map(el => (
                            <MovieCard key={el.id} el={el}/>
                        ))
                    }

                </div>
                <div className="btn-page d-flex justify-content-sm-between gap-5 py-5">
                    <button onClick={() => setPage(page === 1 ? page : page - 1)}>prev</button>
                    <button onClick={() => setPage(page + 1)}>Next</button>
                </div>
            </div>

        </div>
    );
};

export default Home;
