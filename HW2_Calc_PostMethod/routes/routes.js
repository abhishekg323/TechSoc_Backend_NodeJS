const path = require("path");
const express = require("express");
const controller = require(path.resolve("controller","controller"));
let router = express.Router();

router.post("/add",controller.add);
router.post("/sub",controller.sub);
router.post("/div",controller.div);
router.post("/mul",controller.mul);

module.exports=router;