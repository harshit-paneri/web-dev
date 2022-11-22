const UserModel = require("../database/models/Users");
const cryptop = require("crypto");
const jwt = require("jsonwebtoken")

exports.signup = async (req, res) => {
  const usData = req.body;

  const userExist =await UserModel.findOne({ email: usData.email }); //findOne or another funtion = exits it return true or false
  //try and catch implement
  try{
  if (userExist) {
    res.send({
      statusCode: 200,
      message: "user already exists.",
      error: false,
      data: userExist,
    });
  }
  // const salt = "jkvnksdjvnfdlkvd";
  const password = usData.password+process.env.salt;
  const hash = cryptop.createHash("sha1");
  hash.update(password);
  const hashPassword = hash.digest("hex");

  const newUser = new UserModel({
    name : usData.name,
    email : usData.email,
    mobile_number : usData.mobile_number,
    password: hashPassword

  });

  await newUser.save();
  res.send({
    statusCode: 200,
    message: "user created sussefully.",
    error: false,
    data: userExist,
  });
}catch(error){
  res.send(error.message);
}
};

//     try{
//     const userAuth = req.body;
//     res.send({
//         "statusCode" : 200,
//         "message": "Auth Done",
//         "email": String,
//         "password":String
//     });
// }catch(error){
//     res.send(error.message);
// }
