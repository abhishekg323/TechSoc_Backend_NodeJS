const express= require("express");
const app = express();
const myCalc = (firstNum,secondNum,operator) => {
    switch (operator) {
        case "add":
            return firstNum+secondNum;
        case "minus":
            return firstNum-secondNum;
        case "multiply":
            return firstNum*secondNum;
        case "divide":
            return firstNum/secondNum; 
        default:
            return "wrong input";
    }
}
app.get("/qcalc",(req,res)=>{       // localhost:5000/pcalc?num1=2&num2=3&opr=add
    let firstNum = Number(req.query['num1']);
    let secondNum = Number(req.query.num2);
    let operator = req.query.opr;
    let output=myCalc(firstNum,secondNum,operator);
    res.json({"First Number":firstNum,"Second Number":secondNum,"Operation Performed":operator,"Response":output});
});
app.get("/pcalc/:num1/:num2/:opr",(req,res)=>{       // localhost:5000/pcalc/2/3/add
    let firstNum = Number(req.params['num1']);
    let secondNum = Number(req.params.num2);
    let operator = req.params.opr;
    let output=myCalc(firstNum,secondNum,operator);
    res.json({"First Number":firstNum,"Second Number":secondNum,"Operation Performed":operator,"Response":output});
});
app.get("/calc",(req,res)=>{
    res.sendFile(__dirname+"\\calc.html");
});

app.listen(5000,()=>{
    console.log("Server Started at port 5000! , visit http://localhost:5000/calc");
});