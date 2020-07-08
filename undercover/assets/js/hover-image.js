$(document).ready(function() {

// when the image or label is hovered on
$("#hover_img, #p_hover").mouseenter(function() {
    // change the image
    $("#hover_img").attr("src", "../assets/images/season-garments/aw13-black-front.png");
});

// when the image is rolled off of
$("#hover_img, #p_hover").mouseleave(function() {
    // change the image back
    $("#hover_img").attr("src", "../assets/images/season-garments/aw13-black-back.png");
});

});
