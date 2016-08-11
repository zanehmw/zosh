var express = require("express");
var app = express();

app.use("/", express.static("public"));
app.use("/", express.static("bower_components"));

app.get("/*", function(req, res){
  res.sendFile(__dirname + "/public/index.html")
});

app.listen(3001, function(){
  console.log("Its Alive!!!!!")
});
