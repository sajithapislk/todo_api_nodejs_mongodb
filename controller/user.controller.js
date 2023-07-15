const UserService = require("../services/user.services");

exports.register = async (req, res, next) => {
  try {
    console.log("---req body---", req.body);
    const { email, password } = req.body;

    const successRes = await UserService.registerUser(email, password);

    res.json({
      status: true,
      sucess: "User Registered Successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    console.log("---req body---", req.body);
    const { email, password } = req.body;

    const user = await UserService.checkUser(email);
    console.log("---user---", user);

    if(!user){
      throw new Error('User dont exist');
    }

    const isMatch = await user.comparePassword(password);
    if(isMatch === false){
      throw new Error('Password is invalid');
    }

    let tokenData = {
      _id:user._id,
      email:user.email
    };

    const token = await UserService.generateToken(tokenData,"secretKey",'1h');

    res.status(200).json({
      status: true,
      token: token
    });

  } catch (error) {
    next(error);
  }
};
