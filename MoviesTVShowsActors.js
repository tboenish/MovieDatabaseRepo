//This is the JavaScript for the Movie and Tv Shows pages

const apiKey = '7dc7b711d0ebbc371bb088419fb03635';//My API Key


const apiUrl_trending_movies = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;//API call for trending movies
const apiURL_trending_tv = `https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`;//API call for trending TV shows
const apiURL_trendingActors = `https://api.themoviedb.org/3/trending/person/day?api_key=${apiKey}`;//API call for trending actors
const apiURLNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
const apiURLPopularMovies =`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
const apiURLTopRatedMovies =`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
const apiURLUpcomingMovies =`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;
const apiURLAiringToday =`https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}`;
const apiURLAiringWeek =`https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}`;
const apiURLPopularTV =`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`;
const apiURLTopRatedTV =`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`;
const apiURLPopularActors =`https://api.themoviedb.org/3/person/popular?api_key=${apiKey}`;



const tv_container = document.getElementById("tv_shows");//Get the HTML container for TV shows
const moviesContainer = document.getElementById("movies");//Get the HTML container for movies
const actorContainer = document.getElementById("actors");//Get the HTML container for Actors
const nowPlayingContainer = document.getElementById("nowPlaying");
const popularMoviesContainer = document.getElementById("popularMovies");
const topRatedMoviesContainer = document.getElementById("topRatedMovies");
const upcomingMoviesContainer = document.getElementById("upcomingMovies");
const airingTodayContainer = document.getElementById("airingToday");
const airingWeekContainer = document.getElementById("airingWeek");
const popularTVContainer = document.getElementById("popularTV");
const topRatedTVContainer = document.getElementById("topRatedTV");
const popularActorsContainer = document.getElementById("actors2");



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
async function nowPlaying()
{
    try{
        const response = await fetch(apiURLNowPlaying);
        const data = await response.json();

        data.results.forEach(media => {
            const nowPlayingCard = createnowPlayingCard(media);
            nowPlayingContainer.appendChild(nowPlayingCard);
        });
    } catch (error)
    {
        console.error("Error retreiving data:",error);
    }
}

function createnowPlayingCard(media) {
    const { title, name, backdrop_path } = media;

    const nowPlayingCard = document.createElement("div");
    nowPlayingCard.classList.add("nowPlaying_item");

    nowPlayingCard.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="nowPlayingImageRounded">
        <div class = "title">${title}</div>
    `;
    return nowPlayingCard;
}

async function popularMovies()
{
    try{
        const response = await fetch(apiURLPopularMovies);
        const data = await response.json();

        data.results.forEach(media => {
            const popularMoviesCard = createPopularMoviesCard(media);
            popularMoviesContainer.appendChild(popularMoviesCard);
        });
    } catch (error)
    {
        console.error("Error retreiving data:",error);
    }
}

function createPopularMoviesCard(media) {
    const { title, name, backdrop_path } = media;

    const popularMoviesCard = document.createElement("div");
    popularMoviesCard.classList.add("popularMovies_item");

    popularMoviesCard.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="popularMoviesImageRounded">
        <div class = "title">${title}</div>
    `;
    return popularMoviesCard;
}

async function topRatedMovies()
{
    try{
        const response = await fetch(apiURLTopRatedMovies);
        const data = await response.json();

        data.results.forEach(media => {
            const topRatedMoviesCard = createtopRatedMoviesCard(media);
            topRatedMoviesContainer.appendChild(topRatedMoviesCard);
        });
    } catch (error)
    {
        console.error("Error retreiving data:",error);
    }
}

function createtopRatedMoviesCard(media) {
    const { title, name, backdrop_path } = media;

    const topRatedMoviesCard= document.createElement("div");
    topRatedMoviesCard.classList.add("topRatedMovies_item");

    topRatedMoviesCard.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="topRatedMoviesImageRounded">
        <div class = "title">${title}</div>
    `;
    return topRatedMoviesCard;
}

async function upcomingMovies()
{
    try{
        const response = await fetch(apiURLUpcomingMovies);
        const data = await response.json();

        data.results.forEach(media => {
            const upcomingMoviesCard= createupcomingMoviesCard(media);
            upcomingMoviesContainer.appendChild(upcomingMoviesCard);
        });
    } catch (error)
    {
        console.error("Error retreiving data:",error);
    }
}

function createupcomingMoviesCard(media) {
    const { title, name, backdrop_path } = media;

    const upcomingMoviesCard= document.createElement("div");
    upcomingMoviesCard.classList.add("upcomingMovies_item");

    upcomingMoviesCard.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="upcomingMoviesImageRounded">
        <div class = "title">${title}</div>
    `;
    return upcomingMoviesCard;
}

async function airingToday()
{
    try{
        const response = await fetch(apiURLAiringToday);
        const data = await response.json();

        data.results.forEach(media => {
            const airingTodayCard= createAiringTodayCard(media);
            airingTodayContainer.appendChild(airingTodayCard);
        });
    } catch (error)
    {
        console.error("Error retreiving data:",error);
    }
}

function createAiringTodayCard(media) {
    const { title, name, backdrop_path } = media;

    const airingTodayCard= document.createElement("div");
    airingTodayCard.classList.add("airingToday_item");

    airingTodayCard.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="airingTodayImageRounded">
        <div class = "title">${name}</div>
    `;
    return airingTodayCard;
}

async function airingWeek()
{
    try{
        const response = await fetch(apiURLAiringWeek);
        const data = await response.json();

        data.results.forEach(media => {
            const airingWeekCard= createAiringWeekCard(media);
            airingWeekContainer.appendChild(airingWeekCard);
        });
    } catch (error)
    {
        console.error("Error retreiving data:",error);
    }
}

function createAiringWeekCard(media) {
    const { title, name, backdrop_path } = media;

    const airingWeekCard= document.createElement("div");
    airingWeekCard.classList.add("airingWeek_item");

    airingWeekCard.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="airingWeekImageRounded">
        <div class = "title">${name}</div>
    `;
    return airingWeekCard;
}

async function popularTV()
{
    try{
        const response = await fetch(apiURLPopularTV);
        const data = await response.json();

        data.results.forEach(media => {
            const popularTVCard= createPopularTVCard(media);
            popularTVContainer.appendChild(popularTVCard);
        });
    } catch (error)
    {
        console.error("Error retreiving data:",error);
    }
}

function createPopularTVCard(media) {
    const { title, name, backdrop_path } = media;

    const popularTVCard= document.createElement("div");
    popularTVCard.classList.add("popularTV_item");

    popularTVCard.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="popularTVImageRounded">
        <div class = "title">${name}</div>
    `;
    return popularTVCard;
}

async function topRatedTV()
{
    try{
        const response = await fetch(apiURLTopRatedTV);
        const data = await response.json();

        data.results.forEach(media => {
            const topRatedTVCard= createTopRatedTVCard(media);
            topRatedTVContainer.appendChild(topRatedTVCard);
        });
    } catch (error)
    {
        console.error("Error retreiving data:",error);
    }
}

function createTopRatedTVCard(media) {
    const { title, name, backdrop_path } = media;

    const topRatedTVCard= document.createElement("div");
    topRatedTVCard.classList.add("topRatedTV_item");

    topRatedTVCard.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="topRatedTVImageRounded">
        <div class = "title">${name}</div>
    `;
    return topRatedTVCard;
}

async function fetchPopularActor()
{
    try{
        const response = await fetch(apiURLPopularActors);
        const data = await response.json();

        data.results.forEach(media => {
            const popularActorsCard = createPopularActorsCard(media);
            popularActorsContainer.appendChild(popularActorsCard);
        });
    } catch (error)
    {
        console.error("Error retreiving data:",error);
    }
}

//Display trending actors
function createPopularActorsCard(media)
{
    const {name,profile_path} = media;
    const popularActorsCard = document.createElement("div");
    popularActorsCard.classList.add("actors2_item");

    popularActorsCard.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w500/${profile_path}" class = "actors2ImageRounded">
    <div class = "title">${name}</div>
    `;

    return popularActorsCard;
    
}
fetchMovies();
fetchTv();
fetchActor();
nowPlaying();
popularMovies();
topRatedMovies();
upcomingMovies();
airingToday();
airingWeek();
popularTV();
topRatedTV();
fetchPopularActor();