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
    throw error;
  }
};
