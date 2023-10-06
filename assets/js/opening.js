let startButton = document.querySelector("#start");
var link = document.querySelector("#favorites-link");

//link.addEventListener("click", function(e) {
   // window.location.href = "reccomended.html";
    
//});

startButton.addEventListener("click", function (e) {
    event.preventDefault();
    window.location.href = "reccomended.html";
    console.log("The clicker, clicks");
  });

