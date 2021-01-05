const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
    minlength: 6,
    max: 70,
  },
  username: {
    type: String,
    required: [true, "Please enter a Username"],
    minlength: 6,
    max: 70,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: [isEmail, "PLease enter a valid Email"],
    required: [true, "Please enter an Email"],
  },
  password: {
    type: String,
    minlength: [6, "Mininum password length is 6 characters"],
    max: 1000,
    unique: true,
    required: [true, "Please enter a password"],
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "creator"],
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
