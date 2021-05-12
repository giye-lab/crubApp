/**
 * 1. Create Schema for User
 * 2. Model scahema for user
 * 3. export to server
 */

const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true,
  },
  country: String,
});
const User = mongoose.model("User", userSchema);

module.exports = User;
