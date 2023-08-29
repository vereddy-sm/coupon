const express       = require("express");
const router        = express.Router();
const couponModel   = require("../models/coupon");

router.get("/test", (req, res) => {
    return res.json({
        success : 0,
        message : "Coupon route is working"
    });
});

router.post("/getCoupons", async (req,res) => {
    try{
        const {
            postCode
        } = req.body;
        const result = await couponModel.find({
            code:postCode
        });
        
        return res.json({
            success : 1,
            message : result
        });
    }
    catch(error){
        return res.json({
            success : 0,
            message : error
        });
    }
});

router.post("/insertCode", async(req,res) => {
    try{
        const {
            id,
            code,
            status,
            expired_date,
            expiry_status
        } = req.body;

        let data = new couponModel({
            id : id,
            code : code,
            status : status,
            expired_date : expired_date,
            expiry_status : expiry_status
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

module.exports  = router;