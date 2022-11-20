const mongo = require("./database/connection");
const user = require("./database/models/Users");
const product = require("./database/models/Product");

const userObject =new user({});
console.log(userObject);
const app = async () => { 
const connect = await mongo.connectToDb();
};
app();

const ProductValid = new product(
    {
        item_id:1,
        seller_name:"Namcii",
        category:"ToothPaste",
        price:657,
        seller_number:9867452367,
    });
console.log(ProductValid);


const Product1 = new product(
    {
        item_id:2,
        seller_name:"Hanshika",
        category:"Brush",
        price:20,
        seller_number:98667652367,
    });
Product1.save();


// const express = require('express');
// const app = express();

// app.get('/',(req, res)=>{
//     res.send("hii");
// });

// app.listen(3000);

