const mongoose = require("mongoose");
require("../connection/db");

const pgSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true,
        default: "admin"
    },
    pgName: {
        type: String,
        required : true,
        unique : true
    },
    rooms : {
        type : Number,
        required :true,
        default : 8
    },
    address : {
        type : String,
        required : true
    },
    rent : {
        type : Number,
        required : true,
        default : 20000
    },
    document : {
        type : String,
        required : true
    },
    status: {
        type: String,
        required: true,
        default: "empty"
    }

})



module.exports = new mongoose.model("pg_tables",pgSchema);
