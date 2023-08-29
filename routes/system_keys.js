const express   = require("express");
const router    = express.Router();
const keysModel = require("../models/system_keys");

router.get("/test", (req,res) => {
    return res.json({
        success : 0,
        message : "System keys route is working"
    });
});

module.exports  = router;