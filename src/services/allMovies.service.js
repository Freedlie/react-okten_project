import {axiosService} from "./axios.service";
import {urls} from "../configs";

const allMoviesService = {
    getAll:()=> axiosService.get(urls.allMovies)
}

export {
    allMoviesService
}