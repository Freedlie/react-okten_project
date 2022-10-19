import {axiosService} from "./axios.service";

const movieDetailsService = {
    getAll: (id) => axiosService.get(`/movie/${id}`),
    getVideo : (id) => axiosService.get(`/movie/${id}/videos`).then(value => value.data)
}

export {
    movieDetailsService
}