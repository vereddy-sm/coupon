const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
    id : {
        type : Number,
        require : true
    },
    coupon_code : {
        type : String        
    },
    computer_name : {
        type : String
    },
    store_code : {
        type : String
    },
    store_name : {
        type : String
    },
    date_added : {
        type : Date,
        default : new Date()
    }
});

module.exports = mongoose.model("code_history", historySchema);