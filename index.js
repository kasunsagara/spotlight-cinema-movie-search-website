const backgrounds = [
    'image/background_1.jpg',
    'image/background_2.jpg',
    'image/background_3.jpg',
    'image/background_4.jpg'
];

let currentBackground = 0;

function changeBackground() {
   
    document.body.style.backgroundImage = `url('${backgrounds[currentBackground]}')`;

    currentBackground = (currentBackground + 1) % backgrounds.length;
}

setInterval(changeBackground, 5000);

changeBackground();

function search() {
    let movieInput = document.getElementById("movie");
    let movieName = movieInput.value;

    let xhr = new XMLHttpRequest();
    let url = "http://www.omdbapi.com/?apikey=61968fdb&t=" + encodeURIComponent(movieName);

    xhr.open("GET", url);
    xhr.responseType = "json";
    xhr.send();

    xhr.onload = function() {
        if (xhr.status === 200 && xhr.response) {
            let response = xhr.response;

            const movieData = {
                Poster: response.Poster || "No poster available",
                Title: response.Title || "N/A",
                Released: response.Released || "N/A",
                Actors: response.Actors || "N/A",
                Country: response.Country || "N/A",
                Language: response.Language || "N/A",
                Runtime: response.Runtime || "N/A",
                imdbRating: response.imdbRating || "N/A"
            };

            window.location.href = `movie-details.html?data=${encodeURIComponent(JSON.stringify(movieData))}`;
        } else {
            console.error("Failed to fetch data");
        }
    };

    xhr.onerror = function() {
        console.error("Network error");
    };
}
