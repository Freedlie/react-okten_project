import React, {useEffect} from 'react';

import css from './Genres.module.css';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";
import {Genre} from "../Genre/Genre";

const Genres = ({setState}) => {

    const dispatch = useDispatch();
    const {genres} = useSelector(state => state.movieReducer);

    useEffect(()=>{
        dispatch(movieActions.getGenres())
    },[]);

    return (
        <div>
            <div className={css.genres}>
                {
                    genres.map((genre, index)=>(<Genre key={index} genre={genre}/>))
                }
            </div>
            <div className={css.hiddenButton}>
                <button className={css.btn} onClick={()=>{
                    setState(false);
                }}>Hide</button>
            </div>
        </div>

    );
};

export {Genres};