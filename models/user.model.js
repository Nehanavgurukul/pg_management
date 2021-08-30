const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true,
        unique : true
    },
    pgName : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    phoneNo : {
        type :Number,
        required : true
    }
})

module.exports = new mongoose.model('users', userSchema);