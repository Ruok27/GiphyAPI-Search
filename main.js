//id gifSpace
 let topics  = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "birds"];
 let buttonSpace = $("#buttonSpace")





//let rating = $("<p>").text("Rating: " + results[i].rating);


for (let i = 0; i < topics[i].length; i++){

    let p = $("<p>").text(topics[i]);
    buttonSpace.append(p);





//let r = $("<button type=\"button\" class=\"btn btn-primary btn-sm\">Small button</button>");


}






$("#submitButton").on("click", function(e) {

    

    let input = $("#textInput").val().trim();

    let p = $("<p>" +input+ "</p>");

    topics.push(input);

    buttonSpace.append(p);


})