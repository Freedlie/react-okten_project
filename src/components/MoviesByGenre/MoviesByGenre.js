import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './MoviesByGenre.module.css';
import {movieActions} from "../../redux";
import {MovieCard} from "../MovieCard/MovieCard";

const MoviesByGenre = () => {
    const {id} = useParams();

    const {moviesByGenre} = useSelector(state => state.movieReducer);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(movieActions.getMoviesByGenre(id))
    },[id])

    return (
        <div className={css.wrap}>
            {
                moviesByGenre.map((movie,index)=>(<MovieCard movie={movie}/>))
            }

        </div>
    );
};

export {MoviesByGenre};