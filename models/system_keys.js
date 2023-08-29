const mongoose = require("mongoose");

const keysSchema = new mongoose.Schema({
    id : {
        type : Number,
        require : true
    },
    store_id : {
        type : String,
        require : true,
        index : true
    },
    site_nav_code : {
        type : String
    },
    store_name : {
        type : String
    },
    store_key : {
        type : String
    },
    store_email : {
        type : String
    },
    status : {
        type : Number,
        require : true,
        default : 1,
        index : true
    },
    last_updated_by : {
        type : Number,
        require : true,
        default : -1,
    },
    last_updated_on : {
        type : String
    },
    created_by : {
        type : Number,
        require : true,
        default : -1,
    },
    date_added : {
        type : Date,
        default : new Date()
    }
});

module.exports = mongoose.model("system_keys", keysSchema);