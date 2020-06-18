

const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userName:{type:String,unique:true},
    password:String,
    admin:{
        type:Boolean,
        default:false,
    },
    firstName:String,
    lastName:String,
    images:[]
});

const User = mongoose.model("User", userSchema);

exports.User = User;
