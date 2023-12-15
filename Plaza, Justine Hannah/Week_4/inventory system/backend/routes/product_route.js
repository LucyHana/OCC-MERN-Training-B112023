const router = require("express").Router();
const {
  addProduct,
  getAllProducts,
  getSomeProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/product_controller");

const { authMiddleware } = require("../middleware/auth_model");

router.post("/", authMiddleware, addProduct);
router.get("/", getAllProducts);
router.get("/some", getSomeProducts);
router.get("/:id", getProductById);
router.patch("/:id", authMiddleware, updateProduct);
router.delete("/:id", authMiddleware, deleteProduct);

module.exports = router;
