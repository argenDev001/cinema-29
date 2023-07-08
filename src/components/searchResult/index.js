import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../../Apikey";
import MovieCard from "../Card/movieCard";
import './style.scss'

const SearchResult = (key, name) => {
    const [results, setResults] = useState([])
    const {movieName} = useParams()
    const getResults = async () => {
        const res = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${movieName}`)
        const {results} = await res.data
        setResults(results)
    }
    console.log(results)
    useEffect(() => {
        getResults().then()
    }, [])
    return (
        <div id="results">
            <div className="container">
                <div className="movies">
                    {
                        results.map(el => <MovieCard el={el}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SearchResult;