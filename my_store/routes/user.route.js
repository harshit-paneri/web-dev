const express = require("express");
const router = express.Router();



router.get("/",(req,res)=>{
    res.send("Welcome to my store server");
});

module.exports = router;