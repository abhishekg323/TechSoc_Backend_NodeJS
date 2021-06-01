const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
    Auser:{type:String,required:true},
    Atext:{type:String,required:true},
    Aimage:{type:String,required:true},
});

module.exports = blog = mongoose.model("blog",blogSchema);