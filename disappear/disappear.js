$( document ).ready(function() {
  
//-----------------------vertical move--------------------

//verticle movement
$('#circle').on('click', function() {

//gets verticle change
  function getVert(min, max) {
    return Math.floor(Math.random() * (30 - 0) + 0);
}
  var vert = getVert();

//executes verticle change
  $('#box1').css('height', vert +'vw');

});

//---------------------------horizontal move----------------------------

//horizontal movement
$('#circle').on('click', function () {

//gets horizontal change
  function getHorz(min, max) {
    return Math.floor(Math.random() * (90 - 0) + 0);
}
  var horz = getHorz();
  
//executes horizontal change
  $('#box2').css('width', horz + 'vw' );

});

//---------------------color changes----------------------------------

//color change
$('#circle').on('click', function() {

//available colors
  var colorArray = ['red','green','blue','orange','yellow','black','purple'];

//chooses color#
  function getColor(min, max) {
    return Math.floor(Math.random() * (7 - 0) + 0);
}

//chooses a color in with #
  var finalColor = colorArray[getColor()];


//executes colorChange
  $('#circle').css('background', finalColor);
   
});

//--------------------------letter changer----------------------------

//letter change
$('#circle').on('click', function() {
  
//possible letters to change to 
  var letterArray = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//chooses the letter's #
  function getLetter (min, max) {
    return Math.floor(Math.random() * (24-0)+0);
  }  
  
//selects the letter with the specific #
  var finalLetter = letterArray[getLetter()];
  
  
//executes letter change
  $('#circleText').text(finalLetter);

    
  });

//--------------------------------------------------------------------
  
});

