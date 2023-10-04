let startButton = document.querySelector('#startButton');
var omdbApiKey = "45d7bdd6";
var tmdbApiKey = "96e06e8f584c29c1ea0c1fe465d02637";
var letsBegin;


startButton.addEventListener('click', function(e) {
    event.preventDefault();
    letsBegin = startButton.value;
});