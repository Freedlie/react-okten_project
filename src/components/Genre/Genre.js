import React from 'react';

import css from './Genre.module.css';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";
import {NavLink} from "react-router-dom";

const Genre = ({genre}) => {

    const {allMovies} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();



    return (
        <div>
            {/*<p >{genre.name}</p>*/}
            <NavLink className={css.genre} to={`/genres/${genre.id}`}>{genre.name}</NavLink>
        </div>
    );
};

export {Genre};