import React from 'react';

import css from './Genre.module.css';
import {NavLink} from "react-router-dom";

const Genre = ({genre}) => {

    return (
        <div>
            <NavLink className={css.genre} to={`/genres/${genre.id}`} >{genre.name}</NavLink>
        </div>
    );
};

export {Genre};