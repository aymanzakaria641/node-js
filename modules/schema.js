const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const articleSchema = new Schema({
    username: String
  });

 // Create a model based on that schema
const Mydata = mongoose.model("Mydataa", articleSchema);




// export the model
module.exports = Mydata;

