const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
let serverMsg = ()=> console.log("Server started at 5000, visit http://localhost:5000/calc");
let routes = require("./routes/router");
app.use("/",routes);
app.listen(5000,serverMsg);