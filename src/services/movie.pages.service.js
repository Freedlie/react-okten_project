import {axiosService} from "./axios.service";
import {urls} from "../configs";

const moviePagesService ={
    getAll:(num)=> axiosService.get(`${urls.pagesOfMovies}${num}`)
}

export {
    moviePagesService
}