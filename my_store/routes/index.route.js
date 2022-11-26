const express = require("express");
const router = express.Router();
const userRoute = require("./user.route");
const sellerRoute = require("./seller.route");
const authRouter = require("./auth.route");
const authMiddleware = require("../middleware/auth.middleware");

router.use("/auth", authRouter);
router.use(authMiddleware.verifyToken);
router.use("/user", userRoute);
router.use("/seller", sellerRoute);

router.get("/", (req, res) => {
  res.send("hii buddy");
});

module.exports = router;
