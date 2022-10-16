import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviePagesService} from "../../services/movie.pages.service";

const initialState ={
    movies:[],
    currentMovie: null,
    pagesCounter: 1
}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async(num,{rejectWithValue})=>{
        try{
            const {data} = await moviePagesService.getAll(num);
            return data.results;
        }catch (e){
            return rejectWithValue(e.response.data);
        }
    })

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers:{
        setCurrentMovie:(state,action)=>{
            state.currentMovie = action.payload
        },
        incrementPagesCounter:(state,action)=>{
            state.pagesCounter += action.payload
        },
        decrementPagesCounter:(state,action)=>{
            state.pagesCounter -= action.payload
            if(state.pagesCounter < 1){
                state.pagesCounter = 1
            }
}
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled,(state,action)=>{
                state.movies = action.payload
            })
})

const {reducer: movieReducer, actions:{setCurrentMovie,incrementPagesCounter,decrementPagesCounter}} = movieSlice;

const movieActions={
    getAll,
    setCurrentMovie,
    incrementPagesCounter,
    decrementPagesCounter
}

export {
    movieReducer,
    movieActions
}