const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");
router.post("/post",controller.addController);

module.exports = router;