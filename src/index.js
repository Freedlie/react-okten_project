import React from 'react';
import ReactDOM from 'react-dom/client';

import {App} from './App';
import css from './index.css';
import {setUpStore} from "./redux";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setUpStore();

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

