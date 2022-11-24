const express = require("express");
const router = express.Router();
const user = require("../controllers/user.controller");

// router.get('/you',(req, res)=>{
//     res.send("you buddy");
// });

router.get("/", user.getUserDetails);
router.post("/", user.postUserDetails);

module.exports = router;
