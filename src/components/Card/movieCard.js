import React from 'react';
import {Link} from "react-router-dom";

const MovieCard = ({el}) => {


    return (
        <div  className='movie-card' >
            <Link to={`/detail-page/${el.id}`}>
                <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${el.poster_path}`} alt=""/>
            </Link>
            <div className='movie-card-title'>
                <h4>{el.title}</h4>
                <h5>{el.vote_average}</h5>
            </div>
        </div>
    );
};

export default MovieCard;