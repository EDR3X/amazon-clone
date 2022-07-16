const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    validate: [isEmail, "Please enter a valid email"],
  },

  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [8, "Password must be at least 8 characters"],
  },

  address: {
    type: String,
    default: "",
  },

  type: {
    type: String,
    default: "user",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
