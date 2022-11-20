const express = require('express')
const fs = require("fs")
const app = express()
const config = require('./configuration.json')

app.use(express.json())

// fs.writeFile("test1.txt","Hii Buddy, Techspeed",(res,err)=>{
//     console.log(res,err)
// });

// fs.readFile("test1.txt",(err,res)=>{
//     console.log(res.toString());
// });

// const file = fs.readFileSync("test1.txt");
// console.log(file.toString())

// app.get('/',(req,res)=>{
//     res.send("hii buddy ok")
// });



app.post('/',(req,res)=>{
    const {name, email}=req.body;
    if(name != null){
        res.send({
            statusCode :200,
            message:"Name is good to go",
            error : false,
            data :null
        });
    } else {
        res.send({
            statusCode:404,
            message:"Name not found",
            error : true,
            data :null
        });
    }
    // req.body("hii buddy ok")
});

app.listen(config.server.port)