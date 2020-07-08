$(document).ready(function() {

// indicated if the menu is displayed
var isPopped = false;

// when the hamburger is clicked
$("#menu_pop").click(function() {
    // show nav
    $("#nav").animate({width:"toggle"},250);
    // lock the scrolling
    $(document.body).css("height", "100%");
    $(document.body).css("overflow", "hidden");
    // set popped to true
    isPopped = true;
    console.log("pop true");
});

// when the body of the page is clicked
$(".main, .banner_image").click(function() {
    // if the menu is out
    if (isPopped == true) {
        // hide the nav
        $("#nav").animate({width:"toggle"},250);
        // allow for page scrolling again
        $(document.body).css("height", "auto");
        $(document.body).css("overflow", "auto");
        // set popped back to false
        isPopped = false;
        console.log("hide false");
    } else {
        ;
    }
})

});
