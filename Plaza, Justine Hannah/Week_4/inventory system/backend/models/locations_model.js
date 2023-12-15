const mongoose = require("mongoose");

const location_Schema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    stocks: [
      {
        itemCode: { type: String, ref: "Product" },
        quantity: { type: Number, default: 0 },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Location", location_Schema);
