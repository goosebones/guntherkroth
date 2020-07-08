
var letterArray = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  function getLetter (min, max) {
    return Math.floor(Math.random() * (24-0)+0);
  }  
  
  var finalLetter = letterArray[getLetter()];
  
console.log(finalLetter);




