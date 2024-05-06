const express = require("express");
const router = express.Router();
const controller=require('../Controller/userController')


router
.post("/signup", controller.userRegister)
.post("/login",controller.userLogin)
module.exports = router;
