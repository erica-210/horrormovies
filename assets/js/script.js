let startButton = document.querySelector('#start');
var omdbApiKey = "45d7bdd6";
var tmdbApiKey = "96e06e8f584c29c1ea0c1fe465d02637";
var letsBegin;

function getApi(omdbURL) {
    fetch(omdbURL, {
        method: 'GET'
       })
       
    .then(function (response) {
       if (response.ok) {
           console.log(response);
       } else {
           console.log(status);
       }
       return response.json();
    })

    .then(function(data) {
        console.log(data);
    })

    .catch(function (error) {
        alert('ERROR');
      });
}

function getApi(tmdbURL) {
    fetch(tmdbURL, {
        method: 'GET'
       })
       
    .then(function (response) {
       if (response.ok) {
           console.log(response);
       } else {
           console.log(status);
       }
       return response.json();
    })

    .then(function(data) {
        console.log(data);
    })

    .catch(function (error) {
        alert('ERROR');
      });
}

let genreButton = document.querySelector('#genreButton');
genreButton.addEventListener('click',
    function(e) {
        let genreDropdown = document.querySelector('#genreDropdown')
        genreDropdown.classList.toggle('is-active');
});

let favoritedButton = document.querySelector('#favorites');
favoritedButton.addEventListener('click',
    function(e) {
        let favoritedSection= document.querySelector('#favorited');
        
});

startButton.addEventListener('click', function(e) {
    event.preventDefault();
    letsBegin = startButton.value;
    var omdbURL = "https://www.omdbapi.com/?i=tt3896198&apikey=45d7bdd6";
    var tmbdURL = "https://api.themoviedb.org/3/movie/550?api_key=96e06e8f584c29c1ea0c1fe465d02637";
    getApi(omdbURL);
    getApi(tmbdURL);
    console.log("The clicker, clicks");
});
