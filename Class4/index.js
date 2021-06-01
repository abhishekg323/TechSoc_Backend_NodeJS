const express = require("express");
const route = require("./router/routes");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/myDB').then(() => console.log('db connected')).catch((error) => {
    console.log('error occured',error)
})
app.use("/",route);

app.listen(5000,()=>{
    console.log("Server Started");
});