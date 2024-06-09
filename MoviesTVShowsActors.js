//This is the JavaScript for the Movie and Tv Shows pages

const apiKey = '7dc7b711d0ebbc371bb088419fb03635';//My API Key


const apiUrl_trending_movies = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;//API call for trending movies
const apiURL_trending_tv = `https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`;//API call for trending TV shows
const apiURL_trendingActors = `https://api.themoviedb.org/3/trending/person/day?api_key=${apiKey}`;//API call for trending actors



const tv_container = document.getElementById("tv_shows");//Get the HTML container for TV shows
const moviesContainer = document.getElementById("movies");//Get the HTML container for movies
const actorContainer = document.getElementById("actors");//Get the HTML container for Actors

//Retreive the data for trending movies
async function fetchMovies() {
    try {
        const response = await fetch(apiUrl_trending_movies);
        const data = await response.json();

        data.results.forEach(media => {
            const movieCard = createMovieCard(media);
            moviesContainer.appendChild(movieCard);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

//Display trending movie data
function createMovieCard(media) {
    const { title, name, backdrop_path } = media;

    const movieCard = document.createElement("div");
    movieCard.classList.add("movie_item");

    movieCard.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="movie_img_rounded">
        <div class = "title">${title}</div>
    `;
    return movieCard;
}

//Retrieve the data for trending TV shows
async function fetchTv() {
    try {
        const response = await fetch(apiURL_trending_tv);
        const data = await response.json();

        data.results.forEach(media => {
            const TV_card = create_TV_card(media);
            tv_container.appendChild(TV_card);
        });
    } catch (error)
    {
        console.error("Error retrieving data:",error);
    }
}

//Display trending TV data
function create_TV_card(media)
{
    const {name,backdrop_path} = media;

    const TV_card = document.createElement("div");
    TV_card.classList.add("tv_item");

    TV_card.innerHTML=`
    <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="tv_image_rounded">
    <div class = "title">${name}</div>
    `;

    return TV_card;
}

async function fetchActor()
{
    try{
        const response = await fetch(apiURL_trendingActors);
        const data = await response.json();

        data.results.forEach(media => {
            const actorCard = createActorCard(media);
            actorContainer.appendChild(actorCard);
        });
    } catch (error)
    {
        console.error("Error retreiving data:",error);
    }
}

//Display trending actors
function createActorCard(media)
{
    const {name,profile_path} = media;
    const actorCard = document.createElement("div");
    actorCard.classList.add("actor_item");

    actorCard.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w500/${profile_path}" class = "actorImageRounded">
    <div class = "title">${name}</div>
    `;

    return actorCard;
    
}

fetchMovies();
fetchTv();
fetchActor();