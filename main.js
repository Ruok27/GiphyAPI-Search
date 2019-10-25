let topics = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "birds"];
let buttonSpace = $("#buttonSpace");
let gifSpace = $("#gifSpace");







for (let i = 0; i < topics[i].length; i++) {

    let p = $("<button>").text(topics[i]);
    p.attr("class", "buttons");
    buttonSpace.append(p);







}






$("#submitButton").on("click", function () {



    let input = $("#textInput").val().trim();


    let p = $("<button>").text(input);
    p.attr("class", "buttons");
    topics.push(input);

    buttonSpace.append(p);


})


$(".buttons").on("click", function () {

    gifSpace.empty();

    // New buttons submitted dont work 
    let topic = $(this).text();
    const apiKey = "8sFzSG9nIt9QPYmHBa7A7inN6nBZSXpR";

    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=" + apiKey + "&limit=10";


$.ajax({

url: queryURL,
method: "GET"

}).then(function(responce){

    let getBack =  responce.data;

//code here



for (var i = 0; i < getBack.length; i++) {

    if (getBack[i].rating !== "r" && getBack[i].rating !== "pg-13") {
    
    
    
    
    
        let actualGif = $("<img>");
        actualGif.attr("src", getBack[i].images.fixed_height.url);


        gifSpace.append(actualGif);

    






    
    }

}







});


//=============================================
   // let q = $(this).text();

 //   let p = $("<button>" + q + "</button>");

  //  gifSpace.append(p);
//==============================================













})