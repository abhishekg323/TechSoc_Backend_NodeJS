const path = require("path");
const express = require("express");
const app = express();
app.use(express.json());
let routes = require(path.resolve(".","routes","routes"));
app.use("/",routes);

app.listen(5000,()=>{
    console.log("visit http://localhost:5000/add/ by PostMan");
})