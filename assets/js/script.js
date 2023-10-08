let startButton = document.querySelector("#start");

var omdbApiKey = "45d7bdd6";
var tmdbApiKey = "api_key=96e06e8f584c29c1ea0c1fe465d02637";
var baseURL = "https://api.themoviedb.org/3";
var byPopularity =  "/discover/movie?sort_by=popularity.desc&";
var IMG_URL = "https://image.tmdb.org/t/p/w500";
var main = document.getElementById('movie-container');

var letsBegin;

$(document).ready(function () {
//function getApi(omdbURL) {
  //fetch(omdbURL, {
  //  method: "GET",
 // })
  //  .then(function (response) {
   //   if (response.ok) {
   //     console.log(response);
   //   } else {
    //    console.log(status);
    //  }
     // return response.json();
   // })

    //.then(function (data) {
    //  console.log(data);

    //})

    //.catch(function (error) {
     // alert("ERROR");
    //});
//}

function getApi(tmdbURL) {
  fetch(tmdbURL, {
    method: "GET",
  })
    .then(function (response) {
      if (response.ok) {
        //console.log(response);
      } else {
        console.log(status);
      }
      return response.json();
    })

    .then(function (data) {
      console.log(data.results);
      reccommendedMovies(data.results);
    })

    .catch(function (error) {
      alert("ERROR");
    });
}

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWNjZTAzMWM0OWMxMzc0MmQ5MjEyMmNkZmY4OWI3MiIsInN1YiI6IjY1MWI1ZWE0NjcyOGE4MDEwMTI1OWZkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5UaB11c8215CparwWnxT4DdINyKaTi_yzgv4JI4mhFQ'
  }
};

fetch('https://api.themoviedb.org/3/movie/changes?page=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  
  .catch(err => console.error(err));


function connectApi (e) {
  //var omdbURL = "https://www.omdbapi.com/?i=tt3896198&apikey=45d7bdd6";
  var tmbdURL =
    baseURL + byPopularity + tmdbApiKey;
 // getApi(omdbURL);
  getApi(tmbdURL);
}

connectApi();

function reccommendedMovies(data) {
  main.innerHTML = '';

  data.forEach(movie => {
    var {title, poster_path, release_date, vote_average} = movie
    var movieE1 = document.createElement('div');
    movieE1.classList.add('movie');
    movieE1.innerHTML= 
    `
    <img src="${IMG_URL + poster_path}" alt="${title}">
    
   <div class="movie-info">
     <h3>${title}</h3>
     <span class="year">${release_date}</span>
     <span class="rating">${vote_average}</span>
    </div>

    `

    main.appendChild(movieE1);  
  })
  
}

var searchBar = document.querySelector('.input');


let genreButton = document.querySelector("#genreButton");
genreButton.addEventListener("click", function (e) {
  event.preventDefault();
  let genreDropdown = document.querySelector("#genreDropdown");
  genreDropdown.classList.toggle("is-active");


  
});

var favoritedButton = document.querySelector("#favorites");
var favoritedSection = document.querySelector("#favorited");
favoritedButton.addEventListener("click", function pullFavorites(e) {
  event.preventDefault();
  var favoritesTitle = document.createElement("h1");
  var toBeWatched = document.createElement("div");
  favoritesTitle.textContent = "Favorited Movies";
  //toBeWatched.textContent = needs data input inconnection with favorited function
  favoritedSection.append(favoritesTitle);
  favoritedSection.append(toBeWatched);

  favoritesTitle.setAttribute(
    "style",
    "font-size:40px; text-align:center; outline: 2px solid rgb(243, 80, 16); padding:5px;"
  );
},{once : true});


})