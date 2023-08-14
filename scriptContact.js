window.onload = function() {
  var musica = document.getElementById("musica");
  document.body.addEventListener("click", function() {
    musica.play();
  });
  musica.addEventListener("ended", function() {
    musica.currentTime = 0;
    musica.play();
  });
}