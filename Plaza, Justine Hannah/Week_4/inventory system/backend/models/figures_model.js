const mongoose = require("mongoose");

const figure_Schema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    franchise: { type: String },
    limited_edition: { type: Boolean, default: false },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Figure", figure_Schema);
