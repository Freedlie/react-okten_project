import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './MovieDetails.module.css';
import {movieActions} from "../../redux";
import {postURL} from "../../configs";

const MovieDetails = () => {
    const {id} = useParams();

    const dispatch = useDispatch();
    const {movieDetails} = useSelector(state => state.movieReducer);

    useEffect(()=>{
        dispatch(movieActions.getDetailsAboutMovie(id))
    },[id])
    console.log(movieDetails);


    return (
        <div className={css.padding}>
            <div className={css.container}>
                <div className={css.poster}>
                    <img src={postURL + movieDetails.backdrop_path} alt="poster"/>
                </div>
                <div className={css.info}>
                    <h3 className={css.title}>{movieDetails.title}</h3>
                    {
                        movieDetails.tagline && <p className={css.p}>Tagline: <span className={css.span}>{movieDetails.tagline}</span> </p>
                    }
                    {/*<p>Genres:</p>*/}
                    {/*{*/}
                    {/*    movieDetails.genres.map(genre => (<span>{genre.name} </span>))*/}
                    {/*}*/}
                </div>
            </div>
        </div>
    );
};

export {MovieDetails};