var express = require("express");
var app = express();

app.get("/", function(request, response) {
    response.send("Hello world");
});

app.post("/", function(request, response) {
    response.send("Got a POST request")
});

app.put("/", function(request, response) {
    response.send("Got a PUT request");
});

app.delete("/", function(request, response) {
    response.send("Got a DELETE request");
});

app.get("/blocks", function(request, response) {
    var blocks = ["Fixed", "Moveable", "Rotating"];
    response.redirect(301, "/parts");
    response.send(blocks);
    //same as response.json(blocks), since its an array
});

app.listen(3000, function() {
    console.log("Example app listening on port 3000!");
});