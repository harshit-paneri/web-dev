### To create the new file by command line
```
con null>index.js
```
### To run the code in the file - srever run hua then console chala and output agya
```
node index.js - 
```
### To see the properties 
```
npm init
```
#### note - we cannot use HTML commands in node shell (all js commands can be used)

### what is Express?
#### it is a framework which is based on the node to simplify it - npm>>express>> (behen search kr lena kuki harsit n nhi bataya)

### to install express ; i is install
```
npm i express
```
### to connect mongoos with the node - return obejct
```
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
```
### Make a folder name - Database
####  in that make a folder name - Models and a file - name - collection.js

### to connect it to the mongo DB
#### - vQxViBCuKGamqoer password , my-store is my database 
```
const mongoose = require('mongoose');
exports.connectToDb = async () => {
// console.log(mongoose);
    mongoose
    .connect(`mongodb+srv://hanshika:${encodeURIComponent("vQxViBCuKGamqoer")}@training-cluster.bittvk8.mongodb.net/my-store`,
    { useUnifiedTopology: true, useNewUrlParser: true }
)
.then(() => {
    console.log("Connected");
})
.catch((err) => {
    console.log(err);
});
};
```
#### note - pass a async arrow function to get the promise in return 

### Also update the index.js with 
```
const mongo = require("./database/connecttion");
const app = async () => {
const connect =  mongo.connectToDb();
};

app();
```
### then make a file in the models name - User.js
#### and first import mongoose
```
const mongoose = require("mongoose");
```
### Now we can make a schema of the database
```
const{ Schema, model } = mongoose;
const users = new Schema({
    name: {type:String, require: true, default: "Ram"},
    email: {type: String},
    mobile_number: {type: Number},
    password:{type: String },
});
```
### Now for connecting it to the models make a file Users.js and then