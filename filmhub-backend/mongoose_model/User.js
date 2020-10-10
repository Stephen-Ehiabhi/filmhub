const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        min:6,
        max: 70
    },
    lastname: {
        type: String,
        required: true,
        min: 6,
        max: 70
    },
    username: {
        type: String,
        required: true,
        min: 6,
        max: 70
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true
    },
    country: {
        type: String,
        uppercase:true,
        required: true
    },
    password: {
        type: String,
        min: 6,
        max: 1000,
        unique: true,
        required: true
    },
    role: {
        type: String,
        default: "user",
        enum: ["user","creator"]
}
});

const userModel = mongoose.model("User",userSchema)

module.exports = userModel;