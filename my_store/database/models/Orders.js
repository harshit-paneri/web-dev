const mongoose = require("mongoose");
const {Schema, model} = mongoose;
// console.log(mongoose);

const order = new Schema({
    item_id: {type:String, require: true, default: "Rame"},
    order_status:{type:String},
    customer_venue:{type:string},
    pay_type:{type:string},
    
});

const orderModel = new model("order", order);

module.exports = orderModel;