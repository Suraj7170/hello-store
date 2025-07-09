const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String },  // <-- Add this line to store image URL
}, { timestamps: true });


module.exports = mongoose.model("Product", productSchema);
