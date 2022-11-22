const mongoose = require("mongoose");
const {Schema, model} = mongoose;
// console.log(mongoose);

const seller = new Schema({ 
    sellerName: {type:String, require: true, default: "Rame"},
    sellerNo:{type:Number},
    sellerType:{type:string},
    
});

const sellerModel = new model("seller", seller);

module.exports = sellerModel;