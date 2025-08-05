//  Model for Registration and Login (not main page users)

const mongoose = require('mongoose')
const Schema = mongoose.Schema
require('dotenv').config()


const userSchema = new Schema({
    name: String,
    password: {
        type:String,
        required:true
    }
})

const Account = mongoose.model("Account", userSchema)

module.exports=Account
