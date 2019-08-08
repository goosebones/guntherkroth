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

function Song(name, artist, cover_art_type) {
    this.name = name;
    this.artist = artist;

    var lowerCaseName = name.toLowerCase();
    var urlArray = lowerCaseName.split(" ");
    var urlString = "";
    for (var i = 0; i < urlArray.length; i++) {
        urlString += urlArray[i];
        if (i < urlArray.length-1) {
            urlString += "_";
        };
    };

    this.url = "songs/" + urlString + ".mp3";
    if (cover_art_type === "png") {
        this.cover_art_url = "art/" + urlString + ".png";
    } else {
        this.cover_art_url = "art/" + urlString + ".jpg";
    };

    this.toJSON = function toJSON() {
        var s = "{";
        var name = "\"name\"" + ":" + "\"" + this.name + "\"" + ",";
        var artist = "\"artist\"" + ":" + "\"" + this.artist + "\"" + ",";
        var url = "\"url\"" + ":" + "\"" + this.url + "\"" + ",";
        var cover = "\"cover_art_url\"" + ":" + "\"" + this.cover_art_url + "\"" + "}";
        return s + name + artist + url + cover;
    }
};

var s1 = new Song("Sanguine Paradise", "Lil Uzi Vert", "png");
var s2 = new Song("1.5", "21 Savage", "png");
var s3 = new Song("100 Shooters", "Future", "jpg");
var s4 = new Song("Ashley", "Stunna 4 Vegas (ft. Dababy)", "jpg");
var s5 = new Song("Baby Sitter", "Dababy (ft. Offset)", "jpg");
var s6 = new Song("All Of a Sudden", "Lil Baby", "jpg");
var s7 = new Song("Baby", "Lil Baby & Dababy", "jpg");
var s8 = new Song("I Dont Like", "Chief Keef", "jpg");
var s9 = new Song("Lookin", "Playboi Carti (ft. Lil Uzi Vert)", "jpg");
var s10 = new Song("Pure Cocaine", "Lil Baby", "jpg");
var s11 = new Song("Thats a Rack", "Lil Uzi Vert", "png");
var s12 = new Song("The London", "Young Thug (ft. J.Cole & Travis Scott)", "jpg");
var s13 = new Song("Time", "Lil Baby (ft. Meek Mill)", "jpg");


Amplitude.init({
    "songs": [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13]
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
