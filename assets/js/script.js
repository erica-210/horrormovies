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

  var genres = [
    {
      "id": 28,
      "name": "Action"
      },
      {
      "id": 12,
      "name": "Adventure"
      },
      {
      "id": 16,
      "name": "Animation"
      },
      {
      "id": 35,
      "name": "Comedy"
      },
      {
      "id": 80,
      "name": "Crime"
      },
      {
      "id": 99,
      "name": "Documentary"
      },
      {
      "id": 18,
      "name": "Drama"
      },
      {
      "id": 10751,
      "name": "Family"
      },
      {
      "id": 14,
      "name": "Fantasy"
      },
      {
      "id": 36,
      "name": "History"
      },
      {
      "id": 27,
      "name": "Horror"
      },
      {
      "id": 10402,
      "name": "Music"
      },
      {
      "id": 9648,
      "name": "Mystery"
      },
      {
      "id": 10749,
      "name": "Romance"
      },
      {
      "id": 878,
      "name": "Science Fiction"
      },
      {
      "id": 10770,
      "name": "TV Movie"
      },
      {
      "id": 53,
      "name": "Thriller"
      },
      {
      "id": 10752,
      "name": "War"
      },
      {
      "id": 37,
      "name": "Western"
      }
      ]

  var dropdownMenu = document.getElementById('tags');
  var actionHorror = document.getElementById('action');
  var adventureHorror = document.getElementById('adventure');
  var animationHorror = document.getElementById('animation');
  var comedyHorror = document.getElementById('comedy');
  var crimeHorror = document.getElementById('crime');
  var docuHorror = document.getElementById('docu');
  var dramaHorror = document.getElementById('drama');
  var familyHorror = document.getElementById('family');
  var fantasyHorror = document.getElementById('fantasy');
  var historyHorror = document.getElementById('history');
  var musicHorror = document.getElementById('music');
  var mysteryHorror = document.getElementById('mystery');
  var romanceHorror = document.getElementById('romance');
  var scienceHorror = document.getElementById('science');
  var tvHorror = document.getElementById('tv');
  var thrillHorror = document.getElementById('thrill');
  var warHorror = document.getElementById('war');
  var westernHorror = document.getElementById('western');

  genreDefiner();

  function genreDefiner() {
     action = genres.filter((id, index) => index === 10 || index === 0);
     actionHorror.setAttribute = action;
     $( "#action" ).on( "click", function() {
      alert( "Handler for `click` called." );
    } );
     adventure = genres.filter((id, index) => index === 10 || index === 1);
     adventureHorror.setAttribute = adventure;
     $( "#adventure" ).on( "click", function() {
      alert( "Handler for `click` called." );
    } );
     animation = genres.filter((id, index) => index === 10 || index === 2);
     animationHorror.setAttribute = animation;
     $( "#animation" ).on( "click", function() {
    } );
     comedy = genres.filter((id, index) => index === 10 || index === 3);
     comedyHorror.setAttribute = comedy;
     $( "#comedy" ).on( "click", function() {
    } );
     crime = genres.filter((id, index) => index === 10 || index === 4);
     crimeHorror.setAttribute = crime;
     $( "#crime" ).on( "click", function() {
    } );
     documentary = genres.filter((id, index) => index === 10 || index === 5);
     docuHorror.setAttribute = documentary;
     $( "#docu" ).on( "click", function() {
    } );
     drama = genres.filter((id, index) => index === 10 || index === 6);
     dramaHorror.setAttribute = drama;
     $( "#drama" ).on( "click", function() {
    } );
     family = genres.filter((id, index) => index === 10 || index === 7);
     familyHorror.setAttribute = family;
     $( "#family" ).on( "click", function() {
    } );
     fantasy = genres.filter((id, index) => index === 10 || index === 8);
     fantasyHorror.setAttribute = fantasy;
     $( "#fantasy" ).on( "click", function() {
    } );
     historical= genres.filter((id, index) => index === 10 || index === 9);
     historyHorror.setAttribute = historical;
     $( "#history" ).on( "click", function() {
    } );
     music = genres.filter((id, index) => index === 10 || index === 11);
     musicHorror.setAttribute = music;
     $( "#music" ).on( "click", function() {
    } );
     mystery = genres.filter((id, index) => index === 10 || index === 12);
     mysteryHorror.setAttribute = mystery;
     $( "#mystery" ).on( "click", function() {
    } );
     romance = genres.filter((id, index) => index === 10 || index === 13);
     romanceHorror.setAttribute = romance;
     $( "#romance" ).on( "click", function() {
    } );
     science = genres.filter((id, index) => index === 10 || index === 14);
     scienceHorror.setAttribute = science;
     $( "#science" ).on( "click", function() {
    } );
     tv = genres.filter((id, index) => index === 10 || index === 15);
     tvHorror.setAttribute = tv;
     $( "#tv" ).on( "click", function() {
    } );
     thrill = genres.filter((id, index) => index === 10 || index === 16);
     thrillHorror.setAttribute = thrill;
     $( "#thrill" ).on( "click", function() {
    } );
     war = genres.filter((id, index) => index === 10 || index === 17);
     warHorror.setAttribute = war;
     $( "#war" ).on( "click", function() {
    } );
     western= genres.filter((id, index) => index === 10 || index === 18);
     westernHorror.setAttribute = western;
     $( "#western" ).on( "click", function() {
    } );
    console.log(war);
    var byGenre = 'with_genres&';
    //var tmbdURL =
      //baseURL + byPopularity + byGenre + tmdbApiKey;
   // getApi(omdbURL);
    //getApi(tmbdURL);
  }
 
  function connectApi (e) {
    //var omdbURL = "https://www.omdbapi.com/?i=tt3896198&apikey=45d7bdd6";
    var tmbdURL =
      baseURL + byPopularity + tmdbApiKey;
   // getApi(omdbURL);
    getApi(tmbdURL);
  }

connectApi();


// not styling properly. Need to look over. May be issue with bulma
function reccommendedMovies(data) {
  
  main.innerHTML = '';

  data.forEach(movie => {
    var {title, poster_path, release_date, vote_average} = movie;
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

var form = document.getElementById('form');
var searchBar = document.getElementById('search');
var searchURL = baseURL + '/search/movie?' + tmdbApiKey
form.addEventListener('submit', (e) => {
  event.preventDefault();
  var searchCriteria = search.value
  
  if(searchCriteria) {
    getApi(searchURL + '&query=' + searchCriteria)
  } else {
    getApi(tmbdURL);
  }
})

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