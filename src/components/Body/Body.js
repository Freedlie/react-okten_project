import React from 'react';

import css from './Body.module.css';
import {Movies} from "../Movies/Movies";
import {PageSwitcher} from "../PageSwitcher/PageSwitcher";

const Body = () => {
    return (
        <div className={css.padding}>
            <Movies/>
            <PageSwitcher/>
        </div>
    );
};

export {Body};