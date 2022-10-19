import React, {useState} from 'react';

import css from "./MovieSearch.module.css";
import {buttonSearch} from "../../configs";

const MovieSearch = ({searchFilm}) => {
    const [searchTerm, setSearchTerm] = useState('')


    return (
        <div className={css.form}>
                <input className={css.input} value={searchTerm} type="text" placeholder='enter film' onChange={(e)=> setSearchTerm(e.target.value)}/>
                <p className={css.formButton}>
                    <img className={css.buttonSearch} src={buttonSearch} alt="search" onClick={()=>{
                        searchFilm(searchTerm);
                    }}/>
                </p>
        </div>
    );
};

export {MovieSearch};