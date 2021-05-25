const express= require("express");
const app = express();
function myCalc(firstNum,secondNum,operator){
    let output;
    switch (operator) {
        case "add":
            output=firstNum+secondNum;
            break;
        case "minus":
            output=firstNum-secondNum;
            break;
        case "multiply":
            output=firstNum*secondNum;
            break;
        case "divide":
            output=firstNum/secondNum;
            break;  
        default:
            output="wrong input";
            break;
    }
    return output;
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
    let out=`<form action="qcalc" method="get" >
        Enter First Number : <input type="number" name="num1" required><br>
        Enter Second Number : <input type="number" name="num2" required><br>
        Select Operation : <select name="opr">
            <option value="add">+</option>
            <option value="minus">-</option>
            <option value="multiply">*</option>
            <option value="divide">/</option>
        </select>
        <input type="submit" value="Go" >
        </form>
    `;
    res.send(out);
});

app.listen(5000,()=>{
    console.log("Server Started at port 5000!");
});