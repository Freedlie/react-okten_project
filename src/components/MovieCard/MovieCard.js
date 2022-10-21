import React from 'react';
import {NavLink} from "react-router-dom";

import css from './MovieCard.module.css';
import {postURL} from "../../configs";
import {Star} from "../Star/Star";

const MovieCard = ({movie}) => {

    const vote = (movie.vote_average)/2;

    return (
        <NavLink to={`/movieDetails/${movie.id}`} className={css.card}>

            <div>
                <img className={css.poster} src={postURL + movie.backdrop_path} alt="poster"/>
            </div>
            <div>
                <p className={css.title}>{movie.title}</p>
            </div>
            <div>
                <p>{movie.overview}</p>
            </div>
            <div>
                <Star vote={vote}/>
            </div>
        </NavLink>
    );
};

export {MovieCard};