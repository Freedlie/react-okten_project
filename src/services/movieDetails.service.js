import {axiosService} from "./axios.service";

const movieDetailsService = {
    getAll: (id) => axiosService.get(`/movie/${id}`)
}

export {
    movieDetailsService
}