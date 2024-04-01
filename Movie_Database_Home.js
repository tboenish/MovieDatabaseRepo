//This is the JavaScript for my MovieDatabase project.


const apiKey = '7dc7b711d0ebbc371bb088419fb03635';




const apiUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;
const moviesContainer = document.getElementById("movies");

async function fetchMovies() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        data.results.forEach(media => {
            const movieCard = createMovieCard(media);
            moviesContainer.appendChild(movieCard);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function createMovieCard(media) {
    const { title, name, backdrop_path } = media;

    const movieCard = document.createElement("div");
    movieCard.classList.add("movie_item")

    movieCard.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="movie_img_rounded">
        <div class = "title">${title}</div>
    `;
    return movieCard;
}

fetchMovies();