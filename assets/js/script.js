let startButton = document.querySelector("#start");

var omdbApiKey = "45d7bdd6";
var tmdbApiKey = "api_key=96e06e8f584c29c1ea0c1fe465d02637";
var baseURL = "https://api.themoviedb.org/3";
var byPopularity =  "/discover/movie?sort_by=popularity.desc&";
var movieList = "/discover/movie?";
var byGenre = '&with_genres=';
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

  var selectedGenre = [];
  function genreDefiner() {
     action = genres.filter((id, index) => index === 10 || index === 0);
     actionHorror.setAttribute = action;
     $( "#action" ).on( "click", function() {
      if(selectedGenre.length >= 0){
        selectedGenre.push(action);
    } else {
      if(selectedGenre.includes(action)) {
        selectedGenre.filter((id, index) => {
          if(action == genres.filter) {
            selectedGenre.splice(index, 1);
          }
        })
        } else {
          selectedGenre.push(genre.filter);
        }
      }
      console.log(selectedGenre)
      var actionURL = baseURL + movieList + tmdbApiKey + byGenre + '27,28'
      getApi(actionURL)
    } );
     adventure = genres.filter((id, index) => index === 10 || index === 1);
     adventureHorror.setAttribute = adventure;
     $( "#adventure" ).on( "click", function() {
      if(selectedGenre.length >= 0){
        selectedGenre.push(adventure);
    } else {
      if(selectedGenre.includes(adventure)) {
        selectedGenre.filter((id, index) => {
          if(adventure == genres.filter) {
            selectedGenre.splice(index, 1);
          }
        })
        } else {
          selectedGenre.push(genre.filter);
        }
      }
      console.log(selectedGenre)
      var adventureURL = baseURL + movieList + tmdbApiKey + byGenre + '27,12'
      getApi(adventureURL)
    } );
     animation = genres.filter((id, index) => index === 10 || index === 2);
     animationHorror.setAttribute = animation;
     $( "#animation" ).on( "click", function() {
      if(selectedGenre.length >= 0){
        selectedGenre.push(animation);
    } else {
      if(selectedGenre.includes(animation)) {
        selectedGenre.filter((id, index) => {
          if(animation == genres.filter) {
            selectedGenre.splice(index, 1);
          }
        })
        } else {
          selectedGenre.push(genre.filter);
        }
      }
      console.log(selectedGenre)
      var animationURL = baseURL + movieList + tmdbApiKey + byGenre + '27,16'
      getApi(animationURL)
    } );
     comedy = genres.filter((id, index) => index === 10 || index === 3);
     comedyHorror.setAttribute = comedy;
     $( "#comedy" ).on( "click", function() {
      if(selectedGenre.length >= 0){
        selectedGenre.push(comedy);
    } else {
      if(selectedGenre.includes(comedy)) {
        selectedGenre.filter((id, index) => {
          if(comedy == genres.filter) {
            selectedGenre.splice(index, 1);
          }
        })
        } else {
          selectedGenre.push(genre.filter);
        }
      }
      console.log(selectedGenre)
      var comedyURL = baseURL + movieList + tmdbApiKey + byGenre + '27,35'
      getApi(comedyURL)
    } );
     crime = genres.filter((id, index) => index === 10 || index === 4);
     crimeHorror.setAttribute = crime;
     $( "#crime" ).on( "click", function() {
      if(selectedGenre.length >= 0){
        selectedGenre.push(crime);
    } else {
      if(selectedGenre.includes(crime)) {
        selectedGenre.filter((id, index) => {
          if(crime == genres.filter) {
            selectedGenre.splice(index, 1);
          }
        })
        } else {
          selectedGenre.push(genre.filter);
        }
      }
      console.log(selectedGenre)
      var crimeURL = baseURL + movieList + tmdbApiKey + byGenre + '27,80'
      getApi(crimeURL)
    } );
     documentary = genres.filter((id, index) => index === 10 || index === 5);
     docuHorror.setAttribute = documentary;
     $( "#docu" ).on( "click", function() {
      if(selectedGenre.length >= 0){
        selectedGenre.push(documentary);
    } else {
      if(selectedGenre.includes(documentary)) {
        selectedGenre.filter((id, index) => {
          if(documentary == genres.filter) {
            selectedGenre.splice(index, 1);
          }
        })
        } else {
          selectedGenre.push(genre.filter);
        }
      }
      console.log(selectedGenre)
      var documentaryURL = baseURL + movieList + tmdbApiKey + byGenre + '27,99'
      getApi(documentaryURL)
    } );
     drama = genres.filter((id, index) => index === 10 || index === 6);
     dramaHorror.setAttribute = drama;
     $( "#drama" ).on( "click", function() {
      if(selectedGenre.length >= 0){
        selectedGenre.push(drama);
    } else {
      if(selectedGenre.includes(drama)) {
        selectedGenre.filter((id, index) => {
          if(drama == genres.filter) {
            selectedGenre.splice(index, 1);
          }
        })
        } else {
          selectedGenre.push(genre.filter);
        }
      }
      console.log(selectedGenre)
      var dramaURL = baseURL + movieList + tmdbApiKey + byGenre + '27,18'
      getApi(dramaURL)
    } );
     family = genres.filter((id, index) => index === 10 || index === 7);
     familyHorror.setAttribute = family;
     $( "#family" ).on( "click", function() {
      if(selectedGenre.length >= 0){
        selectedGenre.push(family);
    } else {
      if(selectedGenre.includes(family)) {
        selectedGenre.filter((id, index) => {
          if(family == genres.filter) {
            selectedGenre.splice(index, 1);
          }
        })
        } else {
          selectedGenre.push(genre.filter);
        }
      }
      console.log(selectedGenre)
      var familyURL = baseURL + movieList + tmdbApiKey + byGenre + '27,10751'
      getApi(familyURL)
    } );
     fantasy = genres.filter((id, index) => index === 10 || index === 8);
     fantasyHorror.setAttribute = fantasy;
     $( "#fantasy" ).on( "click", function() {
      if(selectedGenre.length >= 0){
        selectedGenre.push(fantasy);
    } else {
      if(selectedGenre.includes(fantasy)) {
        selectedGenre.filter((id, index) => {
          if(fantasy == genres.filter) {
            selectedGenre.splice(index, 1);
          }
        })
        } else {
          selectedGenre.push(genre.filter);
        }
      }
      console.log(selectedGenre)
      var fantasyURL = baseURL + movieList + tmdbApiKey + byGenre + '27,14'
      getApi(fantasyURL)
    } );
     historical= genres.filter((id, index) => index === 10 || index === 9);
     historyHorror.setAttribute = historical;
     $( "#history" ).on( "click", function() {
      if(selectedGenre.length >= 0){
        selectedGenre.push(historical);
    } else {
      if(selectedGenre.includes(historical)) {
        selectedGenre.filter((id, index) => {
          if(historical == genres.filter) {
            selectedGenre.splice(index, 1);
          }
        })
        } else {
          selectedGenre.push(genre.filter);
        }
      }
      console.log(selectedGenre)
      var historicalURL = baseURL + movieList + tmdbApiKey + byGenre + '27,36'
      getApi(historicalURL)
    } );
     music = genres.filter((id, index) => index === 10 || index === 11);
     musicHorror.setAttribute = music;
     $( "#music" ).on( "click", function() {
      if(selectedGenre.length >= 0){
        selectedGenre.push(music);
    } else {
      if(selectedGenre.includes(music)) {
        selectedGenre.filter((id, index) => {
          if(music == genres.filter) {
            selectedGenre.splice(index, 1);
          }
        })
        } else {
          selectedGenre.push(genre.filter);
        }
      }
      console.log(selectedGenre)
      var musicURL = baseURL + movieList + tmdbApiKey + byGenre + '27,10402'
      getApi(musicURL)
    } );
     mystery = genres.filter((id, index) => index === 10 || index === 12);
     mysteryHorror.setAttribute = mystery;
     $( "#mystery" ).on( "click", function() {
      if(selectedGenre.length >= 0){
        selectedGenre.push(mystery);
    } else {
      if(selectedGenre.includes(mystery)) {
        selectedGenre.filter((id, index) => {
          if(mystery == genres.filter) {
            selectedGenre.splice(index, 1);
          }
        })
        } else {
          selectedGenre.push(genre.filter);
        }
      }
      console.log(selectedGenre)
      var mysteryURL = baseURL + movieList + tmdbApiKey + byGenre + '27,9648'
      getApi(mysteryURL)
    } );
     romance = genres.filter((id, index) => index === 10 || index === 13);
     romanceHorror.setAttribute = romance;
     $( "#romance" ).on( "click", function() {
      if(selectedGenre.length >= 0){
        selectedGenre.push(romance);
    } else {
      if(selectedGenre.includes(romance)) {
        selectedGenre.filter((id, index) => {
          if(romance == genres.filter) {
            selectedGenre.splice(index, 1);
          }
        })
        } else {
          selectedGenre.push(genre.filter);
        }
      }
      console.log(selectedGenre)
      var romanceURL = baseURL + movieList + tmdbApiKey + byGenre + '27,10749'
      getApi(romanceURL)
    } );
     science = genres.filter((id, index) => index === 10 || index === 14);
     scienceHorror.setAttribute = science;
     $( "#science" ).on( "click", function() {
      if(selectedGenre.length >= 0){
        selectedGenre.push(science);
    } else {
      if(selectedGenre.includes(science)) {
        selectedGenre.filter((id, index) => {
          if(science == genres.filter) {
            selectedGenre.splice(index, 1);
          }
        })
        } else {
          selectedGenre.push(genre.filter);
        }
      }
      console.log(selectedGenre)
      var scienceURL = baseURL + movieList + tmdbApiKey + byGenre + '27,878'
      getApi(scienceURL)
    } );
     tv = genres.filter((id, index) => index === 10 || index === 15);
     tvHorror.setAttribute = tv;
     $( "#tv" ).on( "click", function() {
      if(selectedGenre.length >= 0){
        selectedGenre.push(tv);
    } else {
      if(selectedGenre.includes(tv)) {
        selectedGenre.filter((id, index) => {
          if(tv == genres.filter) {
            selectedGenre.splice(index, 1);
          }
        })
        } else {
          selectedGenre.push(genre.filter);
        }
      }
      console.log(selectedGenre)
      var tvURL = baseURL + movieList + tmdbApiKey + byGenre + '27,10770'
      getApi(tvURL)
    } );
     thrill = genres.filter((id, index) => index === 10 || index === 16);
     thrillHorror.setAttribute = thrill;
     $( "#thrill" ).on( "click", function() {
      if(selectedGenre.length >= 0){
        selectedGenre.push(thrill);
    } else {
      if(selectedGenre.includes(thrill)) {
        selectedGenre.filter((id, index) => {
          if(thrill == genres.filter) {
            selectedGenre.splice(index, 1);
          }
        })
        } else {
          selectedGenre.push(genre.filter);
        }
      }
      console.log(selectedGenre)
      var thrillURL = baseURL + movieList + tmdbApiKey + byGenre + '27,53'
      getApi(thrillURL)
    } );
     war = genres.filter((id, index) => index === 10 || index === 17);
     warHorror.setAttribute = war;
     $( "#war" ).on( "click", function() {
      if(selectedGenre.length >= 0){
        selectedGenre.push(war);
    } else {
      if(selectedGenre.includes(war)) {
        selectedGenre.filter((id, index) => {
          if(war == genres.filter) {
            selectedGenre.splice(index, 1);
          }
        })
        } else {
          selectedGenre.push(genre.filter);
        }
      }
      console.log(selectedGenre)
      var warURL = baseURL + movieList + tmdbApiKey + byGenre + '27,10752'
      getApi(warURL)
    } );
     western= genres.filter((id, index) => index === 10 || index === 18);
     westernHorror.setAttribute = western;
     $( "#western" ).on( "click", function() {
      if(selectedGenre.length >= 0){
        selectedGenre.push(western);
    } else {
      if(selectedGenre.includes(western)) {
        selectedGenre.filter((id, index) => {
          if(western == genres.filter) {
            selectedGenre.splice(index, 1);
          }
        })
        } else {
          selectedGenre.push(genre.filter);
        }
      }
      console.log(selectedGenre)
      var westURL = baseURL + movieList + tmdbApiKey + byGenre + '27,37'
      getApi(westURL)
    });
    console.log(war);
  }
 
  function connectApi (e) {
    //var omdbURL = "https://www.omdbapi.com/?i=tt3896198&apikey=45d7bdd6";
    var tmbdURL =
      baseURL + byPopularity + tmdbApiKey + byGenre + '27';
   // getApi(omdbURL);
    getApi(tmbdURL);
  }

connectApi();

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

    <button onclick="Toggle1()" id="heart" class="button"><i class="fas fa-heart"></i></button>
    <button onclick="Toggle2()" id="trash" class="button"><i class="fa-solid fa-trash"></i></button>
    `
    main.appendChild(movieE1);  
    
    var heartBtn = document.getElementById('heart');
    function Toggle1() {
      if (`<button onclick="Toggle1()" id="heart" class="button is-danger"><i class="fas fa-heart"></i></button>`) {
        `<button onclick="Toggle1()" id="heart" class="button"><i class="fas fa-heart"></i></button>`
      } else {
        `<button onclick="Toggle1()" id="heart" class="button is-danger"><i class="fas fa-heart"></i></button>`
      }
    }
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