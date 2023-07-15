const UserModel = require("../model/user.model");
const jwt = require('jsonwebtoken');

class UserService {
  static async registerUser(email, password) {
    try {
      const createUser = new UserModel({ email, password });
      return await createUser.save();
    } catch (error) {
      throw error;
    }
  }
  static async checkUser(email) {
    try {
      return await UserModel.findOne({ email });
    } catch (error) {
      throw error;
    }
  }
  static async generateToken(tokenData,secretKey,jwt_expire){
    return jwt.sign(tokenData,secretKey,{expiresIn:jwt_expire})
  }
  static async authenticateToken(req,res,next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' '[1]);
    if(token == null) return res.sendStatus(401);

    jwt.verify(token,secretKey,(err, user)=>{
      if(err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  }
}

module.exports = UserService;
