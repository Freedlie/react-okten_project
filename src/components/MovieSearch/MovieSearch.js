import React, {useState} from 'react';

import css from "./MovieSearch.module.css";
import {buttonSearch} from "../../configs";
import {NavLink} from "react-router-dom";

const MovieSearch = ({searchFilm,booleanForm}) => {
    const [searchTerm, setSearchTerm] = useState('')

    console.log(booleanForm);

    return (
        <div>
            {
              booleanForm ? (<div className={css.form}>
                                <input className={css.input} value={searchTerm} type="text" placeholder='enter film' onChange={(e)=> setSearchTerm(e.target.value)}/>
                                <p className={css.formButton}>
                                    <img className={css.buttonSearch} src={buttonSearch} alt="search" onClick={()=>{
                                        searchFilm(searchTerm);
                                    }}/>
                                </p>
                </div>) :
                <div className={css.secondBlock}>
                <NavLink className={css.homePage} to={'/'} >Home page</NavLink>
                </div>
            }


        </div>

    );
};

export {MovieSearch};