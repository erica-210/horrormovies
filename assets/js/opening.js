let startButton = document.querySelector("#start");

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