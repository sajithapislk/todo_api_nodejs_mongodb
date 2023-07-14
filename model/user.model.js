const mongoose = require('mongoose');
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

const UserModel = db.model('user',userSchema);
module.exports = UserModel;