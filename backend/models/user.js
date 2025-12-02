const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    fullname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    // salt:{
    //     type:String,
    // },
    password:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    }
},{timestamps:true})

const User = model('user',userSchema);

module.exports = User;