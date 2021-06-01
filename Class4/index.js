const express = require("express");
const route = require("./router/routes");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://dev:dev@cluster0.8gucq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(() => console.log('db connected')).catch((error) => {
    console.log('error occured',error)
})
app.use("/",route);

app.listen(5000,()=>{
    console.log("Server Started");
});