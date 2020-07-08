$(document).ready(function() {

// when the season button is clicked
$("#seasons").click(function(isDisplayed) {
    // toggle the season menu
    $("#seasons_dropdown").toggle(250);
});

// when the collabs button is clicked
$("#collabs").click(function(isDisplayed) {
    // toggle the collab menu
    $("#collabs_dropdown").toggle(250);
});


// This would be used on the Style Code page to determine the
// season/line/type of a given user style code.

// The code would be retrived from an input box, and the
// string would then be parsed and run through a series
// of if else statements to determine which season the
// item belongs to.

// The output would be written to a placeholder paragraph.
/*
$("#button").click(function() {
    var code = document.getElementById("code").value;
    document.getElementById("result").innerHTML = code;
})
*/

});
