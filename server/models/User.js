// Model for Main Page FAKE Users for admin panel

const mongoose = require('mongoose')
require('dotenv').config()
const Schema = mongoose.Schema



const userSchema = new Schema({
    name: String,
    password: String,
    owner: {
        type:String,
        required:true
    }
})

const User = mongoose.model('User',userSchema)

module.exports = User