// var express = require("express");

// var app = express();

// app.get("/", function(req,res){
//     res.send("Hello world");
// });

// app.listen(3000,function(){
//     console.log("Example is running on port 3000");
// });

var express = require("express");

var app = express();

/*var Square = require("./module");
var mySquareObject = new Square(5);

function main(){
    console.log(mySquareObject.getArea());
}
main();

app.get("/", function (req, res) {
    res.send("<h1>Hello world<h1>");
});
*/

//localhost:3000/google

app.use(express.static("public"));

app.get("/", function(req, res){
    res.redirect('index.html');
});

app.get("/google", function (req, res) {
    res.redirect('https://www.google.am');
});

app.get("/google/:search", function (req, res) {
    var sc = req.params.search;

    res.redirect('https://www.google.am/search?q=' + sc);
});

app.get("/:name/:sName", function (req, res) {
    var n = req.params.name;
    var s = req.params.sName;
    res.send("<h1>Hello " + n + " " + s + "<h1>");
});

app.get("/*", function (req, res) {
    res.sendStatus(404);
});

app.listen(3000, function () {
    console.log("Example is running on port 3000");
});