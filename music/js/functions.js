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
  },
    {
      "name": "1.5",
      "artist": "21 Savage",
      "album": "I am > I Was",
      "url": "songs/1.5.mp3",
      "cover_art_url": "art/1.5.png"
  },
    {
      "name": "100 Shooters",
      "artist": "Future",
      "album": "Single",
      "url": "songs/100_shooters.mp3",
      "cover_art_url": "art/100_shooters.jpg"
  },
    {
      "name": "Ashley (ft. Dababy)",
      "artist": "Stunna 4 Vegas",
      "album": "4x",
      "url": "songs/ashley.mp3",
      "cover_art_url": "art/ashley.jpg"
  },
    {
      "name": "Baby Sitter (ft. Offset)",
      "artist": "Dababy",
      "album": "Baby On Baby",
      "url": "songs/baby_sitter.mp3",
      "cover_art_url": "art/baby_on_baby.jpg"
  },
    {
      "name": "All Of A Sudden",
      "artist": "Lil Baby",
      "album": "Too Hard",
      "url": "songs/all_of_a_sudden.mp3",
      "cover_art_url": "art/too_hard.jpg"
  },
    {
      "name": "Baby",
      "artist": "Dababy & Lil Baby",
      "album": "Single",
      "url": "songs/baby.mp3",
      "cover_art_url": "art/baby.jpg"
  },
    {
      "name": "I Don't Like",
      "artist": "Chief Keef",
      "album": "Single",
      "url": "songs/i_dont_like.mp3",
      "cover_art_url": "art/i_dont_like.jpg"
  },
    {
      "name": "Lookin (ft. Lil Uzi Vert)",
      "artist": "Playboi Carti",
      "album": "Playboi Carti",
      "url": "songs/lookin.mp3",
      "cover_art_url": "art/lookin.jpg"
  },
    {
      "name": "Pure Cocaine",
      "artist": "Lil Baby",
      "album": "Street Gossip",
      "url": "songs/pure_cocaine.mp3",
      "cover_art_url": "art/street_gossip.jpg"
  },
    {
      "name": "That's a Rack",
      "artist": "Lil Uzi Vert",
      "album": "Single",
      "url": "songs/thats_a_rack.mp3",
      "cover_art_url": "art/thats_a_rack.png"
  },
    {
      "name": "The London (ft. J.Cole & Travis Scott)",
      "artist": "Young Thug",
      "album": "Single",
      "url": "songs/the_london.mp3",
      "cover_art_url": "art/the_london.jpg"
  },
    {
      "name": "Time (ft. Meek Mill)",
      "artist": "Lil Baby",
      "album": "Street Gossip",
      "url": "songs/time.mp3",
      "cover_art_url": "art/street_gossip.jpg"
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
