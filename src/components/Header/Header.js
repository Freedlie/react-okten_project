import React, {useState} from 'react';

import css from './Header.module.css';
import {logoURL} from "../../configs";
import {MovieSearch} from "../MovieSearch/MovieSearch";
import {Genres} from "../Genres/Genres";
import {NavLink} from "react-router-dom";

const Header = ({searchFilm}) => {

    const [state, setState] = useState(false)

    return (
        <div>
            <div className={css.header_block}>
                <div>
                    <img className={css.logo_size} src={logoURL} alt="logo"/>
                </div>

                <div>
                    <MovieSearch searchFilm={searchFilm}/>
                </div>

                <div>
                    <button className={css.showGenres} onClick={ ()=> {
                        setState(true);
                    }}>Show genres</button>
                    <NavLink className={css.homePage} to={'/'}>Home page</NavLink>
                </div>
            </div>
            {
                state &&
                <div>
                    <Genres setState={setState}/>
                </div>
            }
        </div>

    );
};

export {Header};