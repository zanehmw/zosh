var mongoose = require("mongoose");

var ProductSchema = {
  name:     String
}
mongoose.model("Product", ProductSchema);

mongoose.connect("mongodb://localhost/zosh");

module.exports = mongoose;
