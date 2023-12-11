const router = require("express").Router();
const {
  addBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/book_controller");

const { authMiddleware } = require("../middleware/auth_model");

router.post("/", authMiddleware, addBook);
router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.patch("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
