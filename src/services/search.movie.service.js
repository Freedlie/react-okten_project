import {axiosService} from "./axios.service";

const searchMovieService = {
    getAll: (word)=> axiosService.get(`urls.searchMovie${word}`)
}

export {
    searchMovieService
}