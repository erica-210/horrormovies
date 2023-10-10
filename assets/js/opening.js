let startButton = document.querySelector("#start");
var link = document.querySelector("#favorites-link");

//link.addEventListener("click", function(e) {
   // window.location.href = "reccomended.html";
    
//});

dayjs.extend(window.dayjs_plugin_relativeTime)

var halloween = dayjs('2023-10-31').format('YYYY-MM-DD')
var halloweenCountdown = dayjs().to(halloween, true);
$('#countdown').text("halloween is in " + halloweenCountdown);

startButton.addEventListener("click", function (e) {
    event.preventDefault();
    window.location.href = "reccomended.html";
    console.log("The clicker, clicks");
  });

