import {axiosService} from "./axios.service";
import {urls} from "../configs";

const GenreService = {
    getAll : ()=>
        axiosService.get(urls.genre)

}

export {
    GenreService
}