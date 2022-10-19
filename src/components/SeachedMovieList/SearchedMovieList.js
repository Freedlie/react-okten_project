import React from 'react';
import { useSelector} from "react-redux";

import css from './SearchedMovieList.module.css';
import {MovieCard} from "../MovieCard/MovieCard";

const SearchedMovieList = () => {

    const {searchMovies} = useSelector(state => state.movieReducer);

    return (
            <div className={css.wrap}>
                {
                    searchMovies.map((movie,index)=>(<MovieCard key={index} movie={movie}/>))
                }
            </div>
    );
};

export {SearchedMovieList};