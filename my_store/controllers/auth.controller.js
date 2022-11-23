const UserModel = require("../database/models/Users");
const cryptop = require("crypto");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const usData = req.body;
  try {
    const userExist = await UserModel.findOne({ email: usData.email }); //findOne or another funtion = exits it return true or false
    //try and catch implement

    if (userExist) {
      res.send({
        statusCode: 200,
        message: "user already exists.",
        error: false,
        data: userExist,
      });
    } else {
      // const salt = "jkvnksdjvnfdlkvd";
      const password = usData.password + process.env.salt;
      const hash = cryptop.createHash("sha1");
      hash.update(password);
      const hashPassword = hash.digest("hex");

      const newUser = new UserModel({
        name: usData.name,
        email: usData.email,
        mobile_number: usData.mobile_number,
        password: hashPassword,
      });

      await newUser.save();

      const token = jwt.sign({ userId: newUser._id }, process.env.SECRET_KEY);
      //console.log(token);
      res.send({
        statusCode: 200,
        message: "user created sussefully.",
        error: false,
        data: newUser,
        token: token,
      });
    }
  } catch (error) {
    res.send({
      statusCode: 400,
      message: error.message,
      error: true,
      data: null,
    });
  }
};

  //signin
  exports.signin = async (req, res) => {
    try {
      const usData = req.body;
      const hash = cryptop.createHash("sha1");
      hash.update(usData.password + process.env.SALT);
      const Password = hash.digest("hex");
      const existCheck = await UserModel.findOne({
        email: usData.email,
        password: Password,
      });
      if (existCheck) {
        res.send({
          statusCode: 200,
          message: "Logged In",
          error: false,
          data: existCheck,
        });
      } else {
        res.send({
          statusCode: 400,
          message: "User not found. Create a new user",
          error: true,
        });
      }
    } catch (error) {
      res.send({
        statusCode: 400,
        message: error.message,
        error: true,
        data: null,
      });
    }
  };


// exports.signin = async (req, res) =>{
//   try{
//     const userData = req.body;

//     // const search =await
//     UserModel.findOne({ email: usData.email },{password:usData.password});
//     // const check = UserModel({
//     //   email : usData.email,
//     //   password: hashPassword
//     // });
//     var passwordIsValid = bcrypt.compareSync(
//       req.body.password,
//       user.password
//     );
//     if (!passwordIsValid) {
//       return res.status(401).send({
//         accessToken: null,
//         message: "Invalid Password!"
//       });
//     }
//     var token = jwt.sign({ email : usData.email }, usData.password, { //config.secret
//       expiresIn: 86400 // 24 hours
//     });

//     res.send({
//       statusCode: 200,
//       message: "sign in sussefully.",
//       error: false,
//       data: newUser,
//       token:token,
//     });
//   }catch (error) {
//     res.send({
//       statusCode: 400,
//       message: error.message,
//       error: true,
//       data: null,
//     });
//   }
//  };

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
