import React from 'react';
import css from "./MovieSearch.module.css";
import {buttonSearch} from "../../configs";
import {useDispatch} from "react-redux";

const MovieSearch = () => {

const dispatch = useDispatch();

    // const submit = () => {
    //     return undefined;
    // }

    return (
        <div className={css.form}>
            {/*<form onSubmit={submit({})}>*/}
                <input className={css.input} type="text" placeholder='enter film'/>
                <button className={css.formButton}>
                    <img className={css.buttonSearch} src={buttonSearch} alt="search"/>
                </button>
            {/*</form>*/}

        </div>
    );
};

export {MovieSearch};