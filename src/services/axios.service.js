import axios from "axios";
import {baseURL} from "../configs";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjFjN2M1ZTUyOGQzZmJjMTBiNDc4MmEzNTNlOGY2MCIsInN1YiI6IjYzNGFlY2E5MjVhNTM2MDA3ZDQyOGNlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6_02tOwWy7iCCamBrK7Vxh8xn7pXMCDaR0cDMIhFkRk";

const axiosService = axios.create({baseURL})

axiosService.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

export {
    axiosService
}