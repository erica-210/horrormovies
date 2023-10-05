let startButton = document.querySelector("#start");
var omdbApiKey = "45d7bdd6";
var tmdbApiKey = "96e06e8f584c29c1ea0c1fe465d02637";
var letsBegin;

$(document).ready(function () {
function getApi(omdbURL) {
  fetch(omdbURL, {
    method: "GET",
  })
    .then(function (response) {
      if (response.ok) {
        console.log(response);
      } else {
        console.log(status);
      }
      return response.json();
    })

    .then(function (data) {
      console.log(data);
    })

    .catch(function (error) {
      alert("ERROR");
    });
}

function getApi(tmdbURL) {
  fetch(tmdbURL, {
    method: "GET",
  })
    .then(function (response) {
      if (response.ok) {
        console.log(response);
      } else {
        console.log(status);
      }
      return response.json();
    })

    .then(function (data) {
      console.log(data);
    })

    .catch(function (error) {
      alert("ERROR");
    });
}

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

startButton.addEventListener("click", function (e) {
  event.preventDefault();
  letsBegin = startButton.value;
  var omdbURL = "https://www.omdbapi.com/?i=tt3896198&apikey=45d7bdd6";
  var tmbdURL =
    "https://api.themoviedb.org/3/movie/550?api_key=96e06e8f584c29c1ea0c1fe465d02637";
  getApi(omdbURL);
  getApi(tmbdURL);
  
  console.log("The clicker, clicks");
});
})