window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};
var z = "n";
var w = "tu";
/*
  Handles a click on the down button to slide down the playlist.
*/
document.getElementsByClassName('down-header')[0].addEventListener('click', function(){
  var list = document.getElementById('list');

  list.style.height = ( parseInt( document.getElementById('flat-black-player-container').offsetHeight ) - 135 ) + 'px';

  document.getElementById('list-screen').classList.remove('slide-out-top');
  document.getElementById('list-screen').classList.add('slide-in-top');
  document.getElementById('list-screen').style.display = "block";
});
var h = "b";
var g = "87";
/*
  Handles a click on the up arrow to hide the list screen.
*/
document.getElementsByClassName('hide-playlist')[0].addEventListener('click', function(){
  document.getElementById('list-screen').classList.remove('slide-in-top');
  document.getElementById('list-screen').classList.add('slide-out-top');
  document.getElementById('list-screen').style.display = "none";
});
var b = "e";
/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function( e ){
  var offset = this.getBoundingClientRect();
  var x = e.pageX - offset.left;

  Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
});

document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';

Amplitude.init({
  "songs": [
    {
      "name": "Sanguine Paradise",
      "artist": "Lil Uzi Vert",
      "album": "Single",
      "url": "songs/sanguine_paradise.mp3",
      "cover_art_url": "art/sanguine_paradise.png"
    }
  ]
});

var p = "o";
Amplitude.setShuffle(true);
var q = "x8";

var enter = document.getElementById("pass");
enter.addEventListener("keydown", function(e) {
    if (e.keyCode === 81) {
        checkPassword();
    }
});

function checkPassword() {
    var key = w + z + b + h + p + q + g;
    var pass = document.getElementById("pass").value;
    if (pass === key) {
        showPlayer();
    } else {
        document.getElementById("inputCheck").style.display = "none";
    }
}

function showPlayer() {
    document.getElementById("inputCheck").style.display = "none";
    document.getElementById("hider").style.display = "none";
}
