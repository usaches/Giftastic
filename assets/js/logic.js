console.log(script);

var shows = ["Friends", "Seinfeld", "Futurama", "South Park"];

var newShow = "";


function renderButtons() {

    $("#showsView").empty();

    for(var i=0; i<shows.length; i++){
        $("#showsView").append(`<button>${shows[i]}</button>`);
        console.log(shows);
    }
}
renderButtons();
$("#addShow").on("click", function() {
    event.preventDefault();
    newShow = $("#showInput").val();
    shows.push(newShow);
    renderButtons();
});
$(document).on("click", "button", function() {
        var movie=$(this).text();
        var queryURL2 = `https://api.giphy.com/v1/gifs/search?q=${movie}&api_key=dc6zaTOxFJmzC`;
        // var queryURL = `https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=PG&tag=${movie}`;

        $.getJSON(queryURL2)
            .done(function (response) {
                console.log(response);
                for (var j = 0; j < 10; j++) {
                    console.log(response.data[j].images.fixed_height.url);

                    var imageUrl = response.data[j].images.fixed_height.url;
                    var rating2 = response.data[j].rating.toUpperCase();
                    var newImage = $("<img>" +"<div id='division'></div>");

                    newImage.attr("src", imageUrl);
                    newImage.attr("alt", "cat image");

                    $("#gifHere").prepend(newImage);
                    $("#division").text("Rating: " + rating2)

                }
            })

            .fail(function () {
                console.log("failed");
            })
    }

)