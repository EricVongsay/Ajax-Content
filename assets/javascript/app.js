$(document).ready(function(){

console.log("hello")//check to make sure file is linked correctly


//event.preventDefault(); to prevent page from reloading (use when clicking on submit)

// giphy api key = 4kp5MVD7mXe4XszeEu3TQavOKysImlaQ
//api.giphy.com/v1/gifs/search?q=dogs&api_key=4kp5MVD7mXe4XszeEu3TQavOKysImlaQ&limit=10&rating=pg13

//create array of topics
var topics = ["dogs", "cats","dinosaur","snake","penguins","turtles","goats","fish","lions","walrus","hippos"];



//loop through array to display buttons by array length

function renderButtons(){

    for(var i = 0; i<topics.length;i++ ){
        var newButton = $("<button>");
        newButton.addClass("topic");
        newButton.attr("data-name", topics[i]);
        newButton.text(topics[i]);
        $("#topicDump").append(newButton);
    }



};

renderButtons();
//get buttons to display GIFs pulled from APIs

$(document).on("click", ".topic",function(){
    //changing the topic variable to each unique topic name
    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ topic +"&api_key=4kp5MVD7mXe4XszeEu3TQavOKysImlaQ&limit=10&rating=pg"
    

    console.log(topic);
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

        var results = response.data;
        var gif = results[0].image_original_url;

        var newDiv = $("<img>");
        newDiv.attr("src",gif);
        newDiv.attr("alt", "image");

        $("#gifDump").append(newDiv);




    })
});
//take input from search bar 

//push user input to array 














});