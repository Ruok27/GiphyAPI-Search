let topics = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "birds"];
let buttonSpace = $("#buttonSpace");
let gifSpace = $("#gifSpace");







$("#submitButton").on("click", function () {


    let input = $("#textInput").val().trim();


    let p = $("<button>").text(input);
    p.attr("class", "buttons");
    topics.push(input);

    buttonSpace.append(p);


})







for (let i = 0; i < topics[i].length; i++) {

    let p = $("<button>").text(topics[i]);
    p.attr("class", "buttons");
    buttonSpace.append(p);
}












$(document).on("click", ".buttons", function () {

    gifSpace.empty();



    // New buttons submitted dont work 
    let topic = $(this).text();
    //remember to use that document.ready thing after elements are created on a page

    const apiKey = "8sFzSG9nIt9QPYmHBa7A7inN6nBZSXpR";

    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=" + apiKey + "&limit=10";


    $.ajax({

        url: queryURL,
        method: "GET"

    }).then(function (responce) {

        let getBack = responce.data;





        for (var i = 0; i < getBack.length; i++) {

            if (getBack[i].rating !== "r" && getBack[i].rating !== "pg-13") {





                let actualGif = $("<img>");
                actualGif.attr("src", getBack[i].images.fixed_height.url);


                gifSpace.append(actualGif);








                //end if statement
            }

            //end for loop
        }






        //end then function
    });
    //end on button click
})
