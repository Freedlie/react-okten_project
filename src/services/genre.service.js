import {axiosService} from "./axios.service";

import {urls} from "../configs";

const GenreService = {
    getAllByGenre : (id)=> axiosService.get(`${urls.moviesByGenre}${id}`),
    getAll:() => axiosService.get(urls.genre)
}



export {
    GenreService
}