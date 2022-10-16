import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './Movies.module.css';
import {movieActions} from "../../redux";
import {MovieCard} from "../MovieCard/MovieCard";

const Movies = () => {
    const dispatch = useDispatch();
    const {movies,pagesCounter} =useSelector(state => state.movieReducer);

    useEffect(()=>{
        dispatch(movieActions.getAll(pagesCounter));
    },[pagesCounter])

    return (
        <div className={css.wrap}>
            {
                movies.map((movie,index)=>(<MovieCard key={index} movie={movie}/>))
            }
        </div>
    );
};

export {Movies};