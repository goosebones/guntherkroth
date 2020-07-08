$(document).ready(function() {

// change icon border to green when mouse enter
$(".content").mouseenter(function() {
    $(this).css("border-color", "green");
})
// change icon border to black when mouse exit
$(".content").mouseleave(function() {
    $(this).css("border-color", "black");
})

});
