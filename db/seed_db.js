var mongoose  = require("./connection");
var seedData  = require("./seeds");

var Product   = mongoose.model("Product");

Product.remove().then(function(){
  Product.create(seedData).then(function(){
    process.exit();
  });
});
