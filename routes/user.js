const express   = require("express");
const router    = express.Router();
const md5       = require("md5");
const userModel = require("../models/user");

router.get("/test", (req,res) => {
    return res.json({
        success: 1,
        message: 'User router working'
    });
});

router.get("/getUsers", async (req, res) => {
    const result = await userModel.find();
    return res.json({
        success : 1,
        message : result
    });
});

router.post("/register", async (req, res) => {
    try{
        const {
            first_name,
            last_name,
            email,
            pass_word
        } = req.body;

        if(!first_name || !last_name || !email){
            return res.json({
                success : 0,
                message : "First name, Last name & Email shouldn\'t be empty"
            });
        }

        let emailExists = await userModel.findOne({email:email});
        if(emailExists){
            return res.json({
                success: 0,
                message: "Email already exists in db"
            });
        }
        let data = new userModel({
            first_name  : first_name,
            last_name   : last_name,
            email       : email,
            pass_word   : md5(pass_word)
        });
        
        let results = await data.save();
        return res.json({
            success: 1,
            message: results
        });
    }
    catch(error){
        return res.json({
            success : 0,
            message : error
        });
    }
});

module.exports = router;