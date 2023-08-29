const mongoose = require("mongoose");
const {DB_URL} = process.env;
exports.connect = (req, res) => {
    mongoose.connect(DB_URL)
    .then(()=>{
        console.log("Connected to Mongodb");
    })
    .catch((error) => {
        console.log("Unable to connect to Mongodb");
        return res.json({
            success : 0,
            message : "Unable to connect to Mongodb"
        });
    })
};