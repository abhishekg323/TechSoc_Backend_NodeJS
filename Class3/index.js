const express = require("express");
const app= express();
const routes= require("./routes/router");
app.use(express.json());
app.use("/",routes);


app.listen(5000,()=>{
    console.log("Server Started, visit : localhost:5000/");
});