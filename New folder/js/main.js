// js/main.js
document.addEventListener("DOMContentLoaded", () => {
    const movieList = document.getElementById("movie-list");
    const sampleMovies = [
      { title: "Action Hero", genre: "Action", duration: "120", image: "images/movie1.jpg" },
      { title: "Love Story", genre: "Romance", duration: "130", image: "images/movie2.jpg" }
    ];
    sampleMovies.forEach(movie => {
      movieList.innerHTML += `
        <div class="movie-card">
          <img src="${movie.image}" alt="${movie.title}">
          <h2>${movie.title}</h2>
          <p>Genre: ${movie.genre}</p>
          <p>Duration: ${movie.duration} mins</p>
          <a href="movie.html">View Shows</a>
        </div>`;
    });
  });
  