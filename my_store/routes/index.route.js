const express = require("express");
const router = express.Router();
const userRoute = require("./user.route");

router.use("/user",userRoute);

router.get('/',(req, res)=>{
    res.send("hii buddy");
});

module.exports = router;