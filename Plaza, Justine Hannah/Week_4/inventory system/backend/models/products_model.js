const mongoose = require("mongoose");

const product_Schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    brand: { type: String },
    price: { type: Number, required: true },
    itemCode: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", product_Schema);
