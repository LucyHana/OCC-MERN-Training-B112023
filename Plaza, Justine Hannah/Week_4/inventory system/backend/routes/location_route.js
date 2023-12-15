const router = require("express").Router();
const {
  addLocation,
  getAllLocations,
  getLocationById,
  updateLocation,
  deleteLocation,
  addStocksToLocation,
  removeStockFromLocation,
} = require("../controllers/location_controller");

router.post("/", addLocation);
router.get("/", getAllLocations);
router.get("/:id", getLocationById);
router.patch("/:id", updateLocation);
router.delete("/:id", deleteLocation);
router.patch("/:id/stocks", addStocksToLocation);
router.patch("/:id/removeStock", removeStockFromLocation);

module.exports = router;
