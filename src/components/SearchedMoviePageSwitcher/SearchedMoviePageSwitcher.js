import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import css from "../PageSwitcher/PageSwitcher.module.css";
import {movieActions} from "../../redux";

const SearchedMoviePageSwitcher = () => {

    const arrowNext = 'Next>>';
    const arrowPrev = "<<Prev";

    const dispatch = useDispatch();
    const {searchMovieCounter} = useSelector(state => state.movieReducer)

    return (
        <div>
            <button className={css.prev} onClick={()=>{
                dispatch(movieActions.decrementSearchMovieCounter(1))
            }}>{arrowPrev}</button>
            <div>
                {searchMovieCounter}
            </div>
            <button className={css.next} onClick={()=>{
                dispatch(movieActions.incrementSearchMovieCounter(1))
            }}>{arrowNext}</button>
        </div>
    );
};

export {SearchedMoviePageSwitcher};