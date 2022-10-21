import React from 'react';
import {Header, MovieDetails} from "../../components";

const MovieDetailsPage = () => {
    return (
        <div>
            <Header formParams={false}/>
            <MovieDetails/>
        </div>
    );
};

export {MovieDetailsPage};