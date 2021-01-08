// Variables
const API_KEY = '994e898879ddfb3505ff006e86d817f1';

// Functions
// Get genres
const getData = async () => {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    try {
        const res = await fetch(apiUrl)
            .then(response => response.json());
        return res.genres;
    }
    catch(error) {
            document.querySelector('#failure').innerHTML = `getData: ${error}`; 
    }
};

// Get favourite movie
const getFavMovieData = async () => {
    const apiUrl = `https://api.themoviedb.org/3/find/tt0110357?api_key=${API_KEY}&external_source=imdb_id`
    try{
        const res = await fetch(apiUrl)
            .then(result => result.json());
        return res.movie_results;
    }
    catch(error) {
        document.querySelector('#failure').innerHTML = `getFavMovie: ${error}`; 
    }
}

// Get top movies
const getTopMovies = async () => {
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=1`;
    try {
        const res = await fetch(apiUrl)
            .then(response => response.json());
        return res.results;
    }
    catch(error) {
            document.querySelector('#failure').innerHTML = `getTopMovies: ${error}`; 
    }
};

// Get top action movies
const getTopActionMovies = async () => {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`;
    try {
        const res = await fetch(apiUrl)
            .then(response => response.json());
        return res.results;
    }
    catch(error) {
            document.querySelector('#failure').innerHTML = `getTopActionMovies: ${error}`; 
    }
};

// Get 1975 movies
const get1975Movies = async () => {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1975`;
    try {
        const res = await fetch(apiUrl)
            .then(response => response.json());
        return res.results;
    }
    catch(error) {
            document.querySelector('#failure').innerHTML = `getTopActionMovies: ${error}`; 
    }
};