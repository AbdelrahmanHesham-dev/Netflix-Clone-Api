const apiKey = 'api_key=2b25563f7d119f43b3c99b93e7e19cdc';
const baseUrl = 'https://api.themoviedb.org/3';
const imgUrl = 'https://image.tmdb.org/t/p/original/';

const requests = {
    fetchTrending: `${baseUrl}/trending/all/week?${apiKey}&language=en-US`,
    fetchComedyMovie: `${baseUrl}/discover/movie?${apiKey}&with_genres=35`,
    fetchHorrorMovies: `${baseUrl}/discover/movie?${apiKey}&with_genres=27`,
    fetchNetflixOrignals: `${baseUrl}/discover/tv?${apiKey}&with_networks=213`,
    fetchRomanceMovies: `${baseUrl}/discover/tv?${apiKey}&with_genres=10749`,
}

function createMovieSlide(movie, containerId) {
    const movieSlider = document.getElementById(containerId);
    const div = document.createElement("div");
    div.classList.add('swiper-slide');
    div.innerHTML = `
        <img src=${imgUrl + movie.poster_path} alt="" class="movieimg">
        <div class="detailsDiv">
            <div class="detailss">
                <h3>${movie.original_title ? movie.original_title : movie.name}</h3>
                <p>${movie.overview.substr(0, 200)}</p>
            </div>
        </div>
    `;
    movieSlider.appendChild(div);
}

fetch(requests.fetchTrending)
    .then(response => response.json())
    .then(data => {
        let bannermovie = data.results[Math.floor(Math.random() * (data.results.length - 1))];
        document.getElementById("title").innerHTML = bannermovie.name ? bannermovie.name : bannermovie.title;
        document.getElementById("desc").innerHTML = bannermovie.overview.slice(0, 300);
        document.getElementById("fsec").style.backgroundImage = `url(${imgUrl + bannermovie.backdrop_path})`;
        document.getElementById("fsec2").style.backgroundImage = `url(${imgUrl + bannermovie.poster_path})`;
    });

function fetchMoviesAndCreateSlides(requestUrl, containerId) {
    fetch(requestUrl)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(movie => {
                createMovieSlide(movie, containerId);
            });
        });
}

fetchMoviesAndCreateSlides(requests.fetchNetflixOrignals, "OriginalsMovies");
fetchMoviesAndCreateSlides(requests.fetchHorrorMovies, "Trending");
fetchMoviesAndCreateSlides(requests.fetchRomanceMovies, "RomanceMovies");
fetchMoviesAndCreateSlides(requests.fetchComedyMovie, "ComedyMovie");

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        680: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1000: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 10
        },
    }
});
