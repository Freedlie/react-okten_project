import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices";

const rootReducer = combineReducers({
    movieReducer
});

const setUpStore =() => configureStore({
    reducer: rootReducer
})

export {
    setUpStore
}
