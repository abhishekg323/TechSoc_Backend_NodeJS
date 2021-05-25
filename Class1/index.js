const express = require("express");
const app = express();
app.get("/hello", (req, res) => {
  res.send("<h1>hello world</h1>");
});
app.get("/xyz", (req, res) => {
  res.send("xyz");
});
app.get("/json", (req, res) => {
  res.json({ name: "Abhishek", age: 22, course: "BCA" });
});
app.get("/get", (req, res) => {
  let a = Number(req.query.a);
  let b = Number(req.query.b);
  res.json({sucess:true,output:a+b});
});

app.get("/params/:abc/:bcd",(req,res)=>{
    let a=Number(req.params.abc);
    let b=Number(req.params.bcd);
    res.json({sucess:true,Sum:a+b});
})
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
