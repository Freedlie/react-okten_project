import React from 'react';

import css from './Header.module.css';
import {buttonSearch, logoURL} from "../../configs";

const Header = () => {
    return (
        <div className={css.header_block}>
            <div>
                <img className={css.logo_size} src={logoURL} alt="logo"/>
            </div>

            <div className={css.form}>
                <input className={css.input} type="text" placeholder='enter film'/>
                <button className={css.formButton}>
                    <img className={css.buttonSearch} src={buttonSearch} alt="search"/>
                </button>
            </div>

            <div>
                <button className={css.showGenres}>show genres</button>
            </div>
        </div>
    );
};

export {Header};