import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './PageSwitcher.module.css';
import {movieActions} from "../../redux";

const PageSwitcher = () => {

    const arrowNext = 'Next>>';
    const arrowPrev = "<<Prev";

    const dispatch = useDispatch();
    const {pagesCounter} = useSelector(state => state.movieReducer)

    return (
        <div className={css.switcher}>
                <button className={css.prev} onClick={()=>{
                    dispatch(movieActions.decrementPagesCounter(1))
                }}>{arrowPrev}</button>

            <div className={css.counter}>
                {pagesCounter}
            </div>

                <button className={css.next} onClick={()=>{
                    dispatch(movieActions.incrementPagesCounter(1))
                }}>{arrowNext}</button>
        </div>
    );
};

export {PageSwitcher};