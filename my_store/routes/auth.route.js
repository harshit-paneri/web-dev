const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/auth.controller");


authRouter.post("/signup",authController.signup);
// authRouter.post("/signin",authController.signin);
// router.post("/",postAuth.signup);
module.exports = authRouter;