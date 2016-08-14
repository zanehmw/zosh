var express = require("express");
var app = express();

app.use("/", express.static("public"));
app.use("/", express.static("bower_components"));

app.get("/api/products", function(req, res){
  res.json([
    {name: "Product1"},
    {name: "Product2"},
    {name: "Product3"},
    {name: "Product4"}

  ]);
});

app.get("/*", function(req, res){
  res.sendFile(__dirname + "/public/index.html")
});

app.listen(3001, function(){
  console.log("Its Alive!!!!!")
});
