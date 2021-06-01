const express = require("express");
const controller = require("../controller/controller");
const route = express.Router();
route.post("/add",controller.createBlog);
route.get("/readAll",controller.readAllBlogs);
route.get("/read/:id",controller.readSpecificBlog);
route.put("/update/:id",controller.updateSpecificBlog);
route.delete("/delete/:id",controller.deleteSpecificBlog);
module.exports = route;