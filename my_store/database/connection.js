const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config();
exports.connectToDb = async () => {
    mongoose.connect(
      process.env.MONOGO_URI,
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });
};