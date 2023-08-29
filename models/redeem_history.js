const mongoose = require("mongoose");

const rHistorySchema = new mongoose.Schema({
    co_id : {
        type : Number,
        require : true
    },
    coupon_code : {
        type : String
    },
    coupon_amount : {
        type : Number,
        default : 0
    },
    redeemed_on : {
        type : Date
    },
    ip_address : {
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
    aloha_chequenumber : {
        type : String
    },
    is_multiple : {
        type : String,
        default : 'yes'
    },
    record_status : {
        type : Number,
        default: 1
    },
    delete_status : {
        type : Number,
        default : 1
    },
    created_on : {
        type : Date,
        default : new Date()
    }
});

module.exports = mongoose.model("coupon_redeem_history", rHistorySchema);