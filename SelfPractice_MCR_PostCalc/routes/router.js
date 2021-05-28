const express= require("express");
const routes = express.Router();
let calc= require("../controller/controller");
routes.post("/postCalc",calc.calculate);
routes.get("/calc",calc.sendCalc);
routes.get("/",calc.sendCalc);
module.exports=routes;