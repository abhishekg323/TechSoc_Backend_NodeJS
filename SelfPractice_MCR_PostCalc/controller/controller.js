const path = require("path");
const myCalc = (firstNum,secondNum,operator) => {
    firstNum=Number(firstNum);
    secondNum=Number(secondNum);
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
exports.calculate = (req,res) =>{
    let {num1,num2,opr} = req.body;
    let result = myCalc(num1,num2,opr);
    res.json({"msg":"Successful","result":result});
};
exports.sendCalc = (req,res) => {
    res.sendFile(path.resolve(__dirname,"..","view","calc.html"));
};