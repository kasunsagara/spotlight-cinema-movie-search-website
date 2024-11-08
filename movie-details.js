
const urlParams = new URLSearchParams(window.location.search);
const movieData = JSON.parse(decodeURIComponent(urlParams.get('data')));

document.getElementById("poster").src = movieData.Poster || "No poster available";
document.getElementById("movieTitle").textContent = movieData.Title || "N/A";
document.getElementById("releaseDate").textContent = movieData.Released || "N/A";
document.getElementById("mainActors").textContent = movieData.Actors || "N/A";
document.getElementById("countryOrigin").textContent = movieData.Country || "N/A";
document.getElementById("movieLanguage").textContent = movieData.Language || "N/A";
document.getElementById("movieRuntime").textContent = movieData.Runtime || "N/A";
document.getElementById("imdbRating").textContent = movieData.imdbRating || "N/A";
