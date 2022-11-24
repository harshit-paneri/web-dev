const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    //tekoen check

    if (token) {
      token = token.split(" ")[1];
      console.log(token);
      let user = jwt.verify(token, process.env.SECRET_KEY);
      if (user) {
        req.userId = user.userId;
      } else {
        res.send({
          statusCode: 401,
          error: true,
          message: "Unauthorised Token",
        });
      }
    } else {
      res.send({
        statusCode: 401,
        error: true,
        message: "Unauthorised Token",
      });
    }
    next();
  } catch (error) {
    res.send({
      statusCode: 401,
      error: true,
      message: error.message,
    });
  }
};
