const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const product = new Schema({
    item_id: {type:Number, require: true},
    seller_name:{type:String},
    category:{type:String},
    price : {type:Number},
    seller_number : {type:Number},
    user_id:{type:mongoose.SchemaType.ObjectID},
    item_img : [{img_name:String,img_description:String}],
});

const ProductModel = new model("Product", product);

module.exports = ProductModel;