const mongoose = require("mongoose")
const Schema  = mongoose.Schema

const UserSchema = new Schema({
    first_name6: {
        type: String,
        required: true
    },

    last_name6: {
        type: String,
        required: true
    },

    email6: {
        type: String,
        required: true,
        unique: true
    },

    password6: {
        type: String,
        required: true
    },

    date6: {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('users', UserSchema)

