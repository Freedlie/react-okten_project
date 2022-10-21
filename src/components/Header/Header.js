import React, {useState} from 'react';

import css from './Header.module.css';
import {logoURL} from "../../configs";
import {MovieSearch} from "../MovieSearch/MovieSearch";
import {Genres} from "../Genres/Genres";
import {NavLink} from "react-router-dom";
import {useTheme} from "../../hooks";

const Header = ({searchFilm,formParams}) => {

    let booleanForm = formParams;

    const [state, setState] = useState(false);

    const {setTheme} = useTheme();

    const handleLightThemeClick = () => {
        setTheme('light')
    }
    const handleDarkThemeClick = () => {
        setTheme('dark')
    }

    return (
        <div>
            <div className={css.header_block}>
                <div>
                    <img className={css.logo_size} src={logoURL} alt="logo"/>
                </div>

                <div>
                    <MovieSearch searchFilm={searchFilm} booleanForm={booleanForm}/>
                </div>

                <div>
                    <button className={css.showGenres} onClick={ ()=> {
                        setState(true);
                    }}>Show genres</button>
                    <button className={css.buttonTheme} onClick={handleLightThemeClick}>
                        Light
                    </button>
                    <button className={css.darkButtonTheme} onClick={handleDarkThemeClick}>
                        Dark
                    </button>
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