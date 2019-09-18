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
    }).then(function (response) {
        console.log(response);

        var results = response.data;

        for (var i = 0; i < results.length; i++) {

            //display rating
            var p = $("<p>");
            p.text(results[i].rating);
            var p = $("<p>").text("Rating: " + results[i].rating);

            //creating a new div to hold the Celebrity
            var celebrityDiv = $("<div class='celebrity'>");



            var celebrityGif = $("<img>")


            celebrityGif.attr("src", results[i].images.fixed_height_still.url);
            celebrityGif.attr("data-still", results[i].images.fixed_height_still.url);
            celebrityGif.attr("data-animate", results[i].images.fixed_height.url);
            celebrityGif.attr("data-state", "still");
            celebrityGif.addClass("gif");


            celebrityDiv.append(celebrityGif);

            celebrityDiv.append(p);

            $("#celebrity-view").prepend(celebrityDiv);
        }
    });
}

$("#celebrity-view").on("click", ".gif", function (event) {
    event.preventDefault();

    var state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");

    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
})

//function for displaying celebrity gifs
function renderButtons() {

    //clearing out celebrities so initial celebs dont repeat
    $("#buttons-view").empty();
    //looping through the array of movies
    for (var i = 0; i < celebrities.length; i++) {
        var a = $("<button>");
        a.addClass("celebrity-btn");
        a.attr("data-name", celebrities[i]);
        a.text(celebrities[i]);
        $("#buttons-view").append(a);

    }
}

$("#add-celebrity").on("click", function (event) {
    event.preventDefault();

    var celebrity = $("#celebrity-input").val().trim();

    celebrities.push(celebrity);

    renderButtons();
});

$(document).on("click", ".celebrity-btn", displayCelebrityGifs);

renderButtons();