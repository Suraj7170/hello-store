const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: false }, // ⬅️ Make it optional
});

module.exports = mongoose.model("User", userSchema);
