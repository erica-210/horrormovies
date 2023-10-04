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

startButton.addEventListener('click', function(e) {
    event.preventDefault();
    letsBegin = startButton.value;
    var omdbURL = "http://www.omdbapi.com/?i=tt3896198&apikey=45d7bdd6"
    getApi(omdbURL);
    console.log("The clicker, clicks");
});