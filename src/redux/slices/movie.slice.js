import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    allMoviesService,
    GenreService,
    movieDetailsService,
    moviePagesService,
    searchMovieService
} from "../../services";

const initialState ={
    movies:[],
    currentMovie: null,
    pagesCounter: 1,
    searchMovies:[],
    genres:[],
    moviesByGenre: [],
    allMovies:[],
    movieDetails:[]
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
    });

const getDetailsAboutMovie = createAsyncThunk(
    'movieSlice/getDetailsAboutMovie',
    async (id,{rejectWithValue})=>{
        try{
            const {data} = await movieDetailsService.getAll(id);
            return data;
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)

const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async(_,{rejectWithValue})=>{
        try {
            const {data} = await allMoviesService.getAll();
            return data;
        }catch (e){
            return rejectWithValue(e.response.data);
        }
    }
)

const getMoviesByGenre = createAsyncThunk(
    'movieSlice/getMoviesByGenre',
    async(id,{rejectWithValue})=>{
        try{
            const {data} = await GenreService.getAllByGenre(id);
            return data.results;
        }catch (e){
            return rejectWithValue(e.response.data);
        }
    });

const getGenres = createAsyncThunk(
    'movieSlice/GetGenres',
    async(_,{rejectWithValue})=>{
        try{
            const {data} = await GenreService.getAll();
            return data.genres;
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)

const search = createAsyncThunk(
    'movieSlice/search',
    async(obj,{rejectWithValue})=>{
        try{
            const {data} = await searchMovieService.getAll(obj.searchTerm , obj.searchMovieCounter);
            return data.results;
        }catch (e){
            return rejectWithValue(e.response.data);
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setCurrentMovie: (state, action) => {
            state.currentMovie = action.payload
        },
        incrementPagesCounter: (state, action) => {
            state.pagesCounter += action.payload
        },
        decrementPagesCounter: (state, action) => {
            state.pagesCounter -= action.payload
            if (state.pagesCounter < 1) {
                state.pagesCounter = 1
            }

        },
        resetPageCounter:(state,action)=>{
            state.pagesCounter = 1
        },


    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled,(state,action)=>{
                state.movies = action.payload
            })
            .addCase(search.fulfilled,(state,action)=>{
                state.searchMovies = action.payload
            })
            .addCase(getGenres.fulfilled,(state,action)=>{
                state.genres = action.payload
            })
            .addCase(getMoviesByGenre.fulfilled,(state,action)=>{
                state.moviesByGenre = action.payload
            })
            .addCase(getAllMovies.fulfilled,(state, action)=>{
                state.allMovies = action.payload
            })
            .addCase(getDetailsAboutMovie.fulfilled,(state,action)=>{
                state.movieDetails = action.payload
            })
})

const {reducer: movieReducer, actions:{setCurrentMovie,incrementPagesCounter,decrementPagesCounter,resetPageCounter}} = movieSlice;

const movieActions={
    getAll,
    search,
    getGenres,
    getMoviesByGenre,
    getAllMovies,
    getDetailsAboutMovie,
    setCurrentMovie,
    incrementPagesCounter,
    decrementPagesCounter,
    resetPageCounter
}

export {
    movieReducer,
    movieActions
}