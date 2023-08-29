const mongoose  = require("mongoose");

const couponSchema = new mongoose.Schema({
    id : {
        type : Number,
        require : true
    },
    code : {
        type : Number,
        require : true,
        index : true
    },
    status : {
        type : Number,
        require : true,
        default : 1,
        index : true
    },
    group_id : {
        type : Number,
        index : true
    },
    coupon_name : {
        type : String,
        index : true
    },
    coupon_details : {
        type : Number
    },
    coupon_amount : {
        type : Number
    },
    computer_name : {
        type: String
    },
    store_code : {
        type : String
    },
    store_name : {
        type : String
    },
    start_date : {
        type : Date,
        index : true
    },
    end_date : {
        type : Date,
        index : true
    },
    expired_date : {
        type : Number,
        require : true,
        default : 0
    },
    store_id : {
        type : String
    },
    set_id : {
        type : Number
    },
    aloha_chequenumber : {
        type : Number
    },
    date_added : {
        type : Date
    },
    date_updated : {
        type : Date
    },
    ip_address : {
        type : String
    },
    expiry_status : {
        type : Number,
        require : true,
        default : 1
    },
    department : {
        type : String
    },
    usage_type : {
        type : String
    },
    per_day_amount : {
        type : Number
    }
});

module.exports = mongoose.model("coupon_codes", couponSchema);