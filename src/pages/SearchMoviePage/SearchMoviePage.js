import React  from 'react';

import {Header, SearchedMovieList} from "../../components";
import {SearchedMoviePageSwitcher} from "../../components/SearchedMoviePageSwitcher/SearchedMoviePageSwitcher";

const SearchMoviePage = () => {

    return (
        <div>
            <Header/>
            <SearchedMovieList/>
            <SearchedMoviePageSwitcher/>
        </div>
    );
};

export {SearchMoviePage};