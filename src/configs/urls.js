const baseURL = 'https://api.themoviedb.org/3';

const urls={
    allMovies : '/discover/movie',
    pagesOfMovies : '/discover/movie?page=',
    moviesByGenre : '/discover/movie?api_key=b21c7c5e528d3fbc10b4782a353e8f60&with_genres=',
    genre: '/genre/movie/list',
    searchMovies : '/search/movie?api_key=b21c7c5e528d3fbc10b4782a353e8f60&'
}

const logoURL = 'https://www.themoviedb.org/assets/2/apple-touch-icon-cfba7699efe7a742de25c28e08c38525f19381d31087c69e89d6bcb8e3c0ddfa.png'

const postURL = 'https://image.tmdb.org/t/p/w500';

const buttonSearch = 'https://cdn-icons-png.flaticon.com/512/3991/3991270.png';


export {
    baseURL,
    urls,
    logoURL,
    buttonSearch,
    postURL
}





