// Variables
const listOfMovies = document.querySelector('#showlist');
const favMovie = document.querySelector('#favmovie');
const listOfTopMovies = document.querySelector('#showtoplist');
const listOfTopActionMovies = document.querySelector('#showtopactionlist');
const moviesFrom1975 = document.querySelector('#show1975films');

// Functions
// Get data
const getGenres = async () => await getData().then(data => showList(data));
const getFavMovie = async () => await getFavMovieData().then(data => favMovie.innerText = data[0].title);
const getTopFilms = async () => await getTopMovies().then(data => showTopTen(data));
const getTopActionFilms = async () => await getTopActionMovies().then(data => showTopTenAction(data));
const get1975Films = async () => await get1975Movies().then(data => show1975(data));

// Show genres
const showList = (array) => {
    array.map(item => {
        listItem = document.createElement('li');
        listItem.innerHTML = `Genre name: ${item.name}, id: ${item.id}`;
        listOfMovies.appendChild(listItem);
    });
};

// Show top10
const showTopTen = (array) => {
    array.slice(0, 10)
        .map(item => {
            listItem = document.createElement('li');
            listItem.innerHTML = item.title;
            listOfTopMovies.appendChild(listItem);
    });
};

// Show top10 action
const showTopTenAction = (array) => {
    array.slice(0, 10)
        .map(item => {
            listItem = document.createElement('li');
            listItem.innerHTML = item.title;
            listOfTopActionMovies.appendChild(listItem);
    });
};

const show1975 = (array) => {
    array.map(item => {
            listItem = document.createElement('li');
            listItem.innerHTML = item.title;
            moviesFrom1975.appendChild(listItem);
    });
};

getGenres();
getFavMovie();
getTopFilms();
getTopActionFilms();
get1975Films();