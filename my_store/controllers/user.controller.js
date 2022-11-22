const UserModal = require("../database/models/Users");

// exports.getUserDetails = async (req,res)=>{
//     try{
//         const users = await UserModal.find();
//         res.send(users);
//     } catch (error){
//         res.send(error.message);
//     }
// };

exports.getUserDetails = async (req, res)=> {
    try{
        const users = await UserModal.find();
        res.send({
            "statusCode": 200,
            "message": "Data of users",
            "data": users
        });
    }catch(error){
        res.send(error.message);
    }
};

exports.postUserDetails = async (req,res)=>{
    try{
        const usersData = req.body;
        console.log(usersData);
        res.send(usersData);
    } catch (error){
        res.send(error.message);
    }
};

// exports.getUserDetails = (req,res) => {
//         res.send("user hii");
// };