const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
if (!username || !email || !password) {
  return res.status(400).json({ message: "Username, email, and password are required" });
}

const existingUser = await User.findOne({ $or: [{ username }, { email }] });
if (existingUser) return res.status(400).json({ message: "User already exists with that username or email" });

const hashedPassword = await bcrypt.hash(password, 10);
const user = new User({ username, email, password: hashedPassword });
await user.save();

res.json({ message: "User registered successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ message: "Username and password required" });

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "User not found" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign({ _id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, username: user.username });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
