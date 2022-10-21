import {axiosService} from "./axios.service";

import {urls} from "../configs";

const searchMovieService = {
    getAll : (query,page) => axiosService.get(`${urls.searchMovies}query=${query}&page=${page}`)
}

export {
    searchMovieService
}