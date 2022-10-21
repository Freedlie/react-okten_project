import React, {useEffect, useState} from 'react';
import {Header, Movies, PageSwitcher} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";

const MoviesPage = () => {

    const {pagesCounter} =useSelector(state => state.movieReducer);

    const [moviesName,setMoviesName] = useState('');

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(movieActions.getAll(pagesCounter));
    },[pagesCounter])


    const searchFilm = (name)=>{
        setMoviesName(name);
        dispatch(movieActions.resetPageCounter());
    }


    useEffect(()=>{

        let obj = {
            searchTerm: moviesName,
            searchMovieCounter: pagesCounter
        }

        moviesName && dispatch(movieActions.search(obj))
    },[moviesName,pagesCounter])

    return (
        <div>
            <Header searchFilm={searchFilm} formParams={true}/>
            <Movies/>
            <PageSwitcher/>
        </div>
    );
};

export {MoviesPage};