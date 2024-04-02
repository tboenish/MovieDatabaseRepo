//This is the JavaScript for my MovieDatabase project.


const apiKey = '7dc7b711d0ebbc371bb088419fb03635';




const apiUrl_trending_movies = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;
const apiURL_trending_tv = `https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`;
const moviesContainer = document.getElementById("movies");
const tv_container = document.getElementById("tv_shows");

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

function create_TV_card(media)
{
    const {title,name,backdrop_path} = media;

    const TV_card = document.createElement("div");
    TV_card.classList.add("tv_item");

    TV_card.innerHTML=`
    <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="tv_image_rounded">
    <div class = "title">${name}</div>
    `;

    return TV_card;
}

fetchMovies();
fetchTv();