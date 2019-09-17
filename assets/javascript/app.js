//initial array of celebrities
var celebrities = ["Donald Tump", "Arnold Schwarzenegger", "Dave Chappelle", "Beyonce", "kim kardashian", "Lady Gaga", "Snoop Dog", "michael Jackson", "Hulk Hogan", "Scarlett Johansson"];

//displayCelebrityGifs
function displayCelebrityGifs() {
    var celebrity = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=LRTnM9RET3Myz6jXXWCBzTHPtWVJ4O3Q&q=" + celebrity + "&limit=10&offset=0&rating=PG-13&lang=en";

    // creating the AJAX call for the specific celebrity button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

    //creating a new div to hold the Celebrity
    var celebrityDiv = $("<div class='celebrity'>");

    
    })
} 