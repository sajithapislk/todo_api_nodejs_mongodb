const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;
const db = require('../config/db');

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
});

userSchema.pre('save',async function(){
    try {
        var user = this;
        const salt = await(bcrypt.genSalt(10));
        const hashPass = await bcrypt.hash(user.password,salt);
        user.password = hashPass;
    } catch (error) {
        throw error;
    }
});

userSchema.methods.comparePassword = async function(userPassword){
    try {
        const isMatch = await bcrypt.compare(userPassword,this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
}

const UserModel = db.model('user',userSchema);

module.exports = UserModel;