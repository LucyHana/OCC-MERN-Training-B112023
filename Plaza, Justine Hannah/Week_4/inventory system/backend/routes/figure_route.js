const router = require("express").Router();
const {
  addFigure,
  getAllFigures,
  getFigureById,
  updateFigure,
  deleteFigure,
  getSomeFigures,
} = require("../controllers/figure_controller");

const { authMiddleware } = require("../middleware/auth_model");

router.post("/", authMiddleware, addFigure);
router.get("/", getAllFigures);
router.get("/some", getSomeFigures);
router.get("/:id", getFigureById);
router.patch("/:id", authMiddleware, updateFigure);
router.delete("/:id", authMiddleware, deleteFigure);

module.exports = router;
