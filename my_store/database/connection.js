const mongoose = require("mongoose");
 
exports.connectToDb = async () => {
    mongoose.connect(
    "mongodb+srv://harshit:harshit123@training.ryycfvp.mongodb.net/my-store",
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });
};