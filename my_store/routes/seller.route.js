const express = require("express");
const router = express.Router();
// const sellerRoute = require("./")
 
// router.get("/","hii seller");

router.get('/',(req, res)=>{
    res.send("you seller");
});

module.exports = router;