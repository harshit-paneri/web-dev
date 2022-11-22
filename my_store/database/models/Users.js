const mongoose = require("mongoose");
const {Schema, model} = mongoose;
// console.log(mongoose);

const addressSchema = new Schema({
    street : String,
    city : String,
    pincode : Number,
});

const users = new Schema({
    name: {type:String, require: true, default: "Rame"},
    email:{type:String},
    mobile_number : {type:Number},
    password : {type:String},
});

const UserModel = new model("users", users);

module.exports = UserModel;