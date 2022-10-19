import React from 'react';

import {Header} from "../../components";
import {MoviesByGenre} from "../../components/MoviesByGenre/MoviesByGenre";

const GenrePage = () => {
    return (
        <div>
            <Header/>
            <MoviesByGenre/>
        </div>
    );
};

export {GenrePage};