const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todo = new Schema({
  todo:{
    type:String
  }

})

module.exports = mongoose.model("Todo",todo);