const product = require("../models/products_model");
const mongoose = require("mongoose");

const createItemCode = ({ name, brand, createdAt }) => {
  // Extracting
  const shortName = name.substring(0, 3).toUpperCase();
  const shortBrand = brand.substring(0, 3).toUpperCase();

  // Formatting
  const formattedTime = `${createdAt
    .getHours()
    .toString()
    .padStart(2, "0")}${createdAt.getMinutes().toString().padStart(2, "0")}`;
  const formattedDate = `${createdAt.getDate().toString().padStart(2, "0")}${(
    createdAt.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}${createdAt.getFullYear()}`;

  // Concatenating
  const itemCode = `${shortName}${shortBrand}${formattedTime}${formattedDate}`;

  return itemCode;
};

let addProduct = async (req, res) => {
  try {
    const newProduct = new product(req.body);

    if (!newProduct.createdAt || isNaN(newProduct.createdAt.getTime())) {
      newProduct.createdAt = new Date(); // Assign the current date if not set
    }

    if (
      !newProduct.name ||
      !newProduct.brand ||
      typeof newProduct.name !== "string" ||
      typeof newProduct.brand !== "string"
    ) {
      return res
        .status(400)
        .json({ message: "Name and brand must be non-empty strings" });
    }

    // Generate item code
    const itemCode = createItemCode({
      name: newProduct.name,
      brand: newProduct.brand,
      createdAt: newProduct.createdAt,
    });

    // Update product with item code
    newProduct.itemCode = itemCode;

    const productToDB = await newProduct.save();

    res
      .status(200)
      .json({ message: "Adding of product is successful!", itemCode });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

let getAllProducts = async (req, res) => {
  try {
    const allProducts = await product.find();
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

let getSomeProducts = async (req, res) => {
  try {
    const brandFilter = req.query.brand;
    let query = {};

    if (brandFilter) {
      query = { brand: brandFilter };
    }

    const products = await product.find(query);

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(error);
  }
};

let getProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    const foundProduct = await product.findById(productId);

    if (!foundProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(foundProduct);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

let updateProduct = async (req, res) => {
  try {
    const updatedProduct = await product.findByIdAndUpdate(
      { _id: req.params.id },
      { ...req.body }
    );
    res.status(200).json({ message: "The product has been updated" });
  } catch (err) {
    res.status(400).json(error);
  }
};

let deleteProduct = async (req, res) => {
  try {
    await product.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "The product has been removed" });
  } catch (err) {
    res.status(500).json(error);
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getSomeProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
