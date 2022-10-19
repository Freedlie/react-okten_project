import {axiosService} from "./axios.service";
import {urls} from "../configs";

const searchMovieService = {
    // getAll: (word)=> axiosService.get(`${urls.searchMovie}${word}`)
    getAll : (query,page) => axiosService.get(`${urls.searchMovies}query=${query}&page=${page}`)
}

export {
    searchMovieService
}