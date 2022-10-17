import React, {useState} from 'react';

import css from './Header.module.css';
import {logoURL} from "../../configs";
import {MovieSearch} from "../MovieSearch/MovieSearch";
import {Genres} from "../Genres/Genres";

const Header = () => {

    const [state, setState] = useState(false)

    return (
        <div>
            <div className={css.header_block}>
                <div>
                    <img className={css.logo_size} src={logoURL} alt="logo"/>
                </div>

                <div>
                    <MovieSearch/>
                </div>

                <div>
                    <button className={css.showGenres} onClick={ ()=> {
                        setState(true);
                    }}>show genres</button>
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