import React from 'react';

import css from './Genre.module.css';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";

const Genre = ({genre}) => {

    const {allMovies} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    return (
        <div>
            {/*<p className={css.genre} onClick={async()=>{*/}
            {/*    const {payload} = await dispatch(movieActions.getAllMovies());*/}
            {/*    payload.map((obj,index)=>)*/}
            {/*}}>{genre.name}</p>*/}
        </div>
    );
};

export {Genre};