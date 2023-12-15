const Location = require("../models/locations_model");
const Product = require("../models/products_model");

let addLocation = async (req, res) => {
  try {
    const newLocation = new Location(req.body);
    const locationToDB = await newLocation.save();
    res.status(200).json({ message: "Adding of location is successful!" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

let getAllLocations = async (req, res) => {
  try {
    const allLocations = await Location.find();
    res.status(200).json(allLocations);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

let getLocationById = async (req, res) => {
  const locationId = req.params.id;

  try {
    const foundLocation = await Location.findById(locationId);

    if (!foundLocation) {
      return res.status(404).json({ message: "Location not found" });
    }

    res.status(200).json(foundLocation);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

let updateLocation = async (req, res) => {
  try {
    const locationDoc = await Location.findById(req.params.id);
    if (!locationDoc) {
      return res.status(404).json({ message: "Location not found" });
    }

    locationDoc.name = req.body.name || locationDoc.name;
    locationDoc.stocks = req.body.stocks || locationDoc.stocks;

    const updatedLocation = await locationDoc.save();
    res.status(200).json(updatedLocation);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

let deleteLocation = async (req, res) => {
  try {
    await Location.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "The location has been removed" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

let addStocksToLocation = async (req, res) => {
  const { id } = req.params;
  const { itemCode, quantity } = req.body;

  try {
    const locationDoc = await Location.findById(id);

    if (!locationDoc) {
      return res.status(404).json({ message: "Location not found" });
    }

    const existingProduct = await Product.findOne({ itemCode });

    if (!existingProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    const existingStock = locationDoc.stocks.find(
      (stock) => stock.itemCode === itemCode
    );

    if (existingStock) {
      existingStock.quantity += quantity;
    } else {
      locationDoc.stocks.push({ itemCode, quantity });
    }

    const updatedLocation = await locationDoc.save();

    res.status(200).json(updatedLocation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

let removeStockFromLocation = async (req, res) => {
  const { id } = req.params;
  const { itemCode } = req.body;

  try {
    const location = await Location.findById(id);

    if (!location) {
      return res.status(404).json({ message: "Location not found" });
    }

    const existingStockIndex = location.stocks.findIndex(
      (stock) => stock.itemCode === itemCode
    );

    if (existingStockIndex !== -1) {
      location.stocks.splice(existingStockIndex, 1);

      const updatedLocation = await location.save();
      res.status(200).json(updatedLocation);
    } else {
      res.status(404).json({ message: "Stock not found in the location" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  addLocation,
  getAllLocations,
  getLocationById,
  updateLocation,
  deleteLocation,
  addStocksToLocation,
  removeStockFromLocation,
};
