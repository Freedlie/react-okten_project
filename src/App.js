import React from 'react';
import {Route, Routes} from "react-router-dom";

import {MainPage} from "./layouts";
import {GenrePage, MovieDetailsPage, MoviesPage} from "./pages";

const App = () => {
    return (
            <Routes>
                <Route path={'/'} element={<MainPage/>}>
                    <Route path={'/'} element = {<MoviesPage/>}/>
                    <Route path={'genres/:id'} element = {<GenrePage/>}/>
                    <Route path={'movieDetails/:id'} element={<MovieDetailsPage/>}/>
                </Route>

            </Routes>
    );
};

export {App};