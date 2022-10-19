import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './MovieDetails.module.css';
import {movieActions} from "../../redux";
import {postURL} from "../../configs";
import {movieDetailsService} from "../../services";

const MovieDetails = () => {

    const [currentMovieTrailers, setCurrentMovieTrailers] = useState(null)

    const {id} = useParams();

    const dispatch = useDispatch();
    const {movieDetails} = useSelector(state => state.movieReducer);

    useEffect(()=>{
        dispatch(movieActions.getDetailsAboutMovie(id))
    },[id])
    console.log(movieDetails);

    useEffect(() => {
        const getVideos = async () => {
            const response = await movieDetailsService.getVideo(id);
            setCurrentMovieTrailers(response);
        }
        getVideos()
    }, [])

    return (
        <div className={css.padding}>
            <div>
                <div className={css.container}>
                    <div className={css.poster}>
                        <img src={postURL + movieDetails.backdrop_path} alt="poster"/>
                    </div>
                    <div className={css.info}>
                        <h3 className={css.title}>{movieDetails.title}</h3>
                        {
                            movieDetails.tagline && <p className={css.p}>Tagline: <span className={css.span}>{movieDetails.tagline}</span> </p>
                        }

                        {
                            movieDetails.genres && <p className={css.p}>Genres: {movieDetails.genres.map((genre,index) => (<span className={css.span} key={index}>{genre.name}, </span>))} </p>
                        }
                        {
                            movieDetails.original_language && <p className={css.p}>Original language: <span className={css.span}>{movieDetails.original_language}</span> </p>
                        }
                        {
                            movieDetails.production_countries && <p className={css.p}>Production countries : <span className={css.span}>{movieDetails.production_countries[0].name}</span> </p>
                        }
                        {
                            movieDetails.production_companies && <p className={css.p}>Production companies: {movieDetails.production_companies.map((company,index) => (<span className={css.span} key={index}>{company.name}, </span>))} </p>
                        }
                        {
                            movieDetails.status && <p className={css.p}>Status : <span className={css.span}>{movieDetails.status}</span> </p>
                        }
                        {
                            movieDetails.release_date && <p className={css.p}>Release date: <span className={css.span}>{movieDetails.release_date}</span> </p>
                        }
                        {
                            movieDetails.runtime && <p className={css.p}>Runtime: <span className={css.span}>{movieDetails.runtime} minutes</span> </p>
                        }
                        {
                            movieDetails.vote_average && <p className={css.p}>Vote average: <span className={css.span}>{movieDetails.vote_average} / 10</span> </p>
                        }
                        {
                            movieDetails.vote_count && <p className={css.p}>Vote count: <span className={css.span}>{movieDetails.vote_count}</span> </p>
                        }


                    </div>
                </div>
                <div className={css.secondBlock}>
                    {
                        movieDetails.overview && <p className={css.p}>{movieDetails.overview}</p>
                    }
                    {
                        movieDetails.homepage && <div className={css.block}><a href={movieDetails.homepage} className={css.homepage}>Homepage</a></div>
                    }
                    <div className={css.videoBlock}>
                        <iframe className={css.video} title={'video'}
                                allowFullScreen="allowfullscreen"
                                src={'https://www.youtube.com/embed/' + currentMovieTrailers?.results[0]?.key}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {MovieDetails};