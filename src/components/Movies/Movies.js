import React from 'react';
import {useSelector} from "react-redux";

import css from './Movies.module.css';
import {MovieCard} from "../MovieCard/MovieCard";

const Movies = () => {
    const {movies,searchMovies} =useSelector(state => state.movieReducer)


    return (
        <div className={css.wrap}>
            {
                searchMovies.length > 0 ? searchMovies.map((movie,index)=>(<MovieCard key={index} movie={movie}/>)) :
                  movies.map((movie,index)=>(<MovieCard key={index} movie={movie}/>))
            }
        </div>
    );
};

export {Movies};