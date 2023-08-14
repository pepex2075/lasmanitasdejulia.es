window.onload = function() {
    var music = document.getElementById("music");
    document.body.addEventListener("click", function() {
      music.play();
    });
    music.addEventListener("ended", function() {
      music.currentTime = 0;
      music.play();
    });
}