const router = require("express").Router();
const { addUser, userLogin } = require("../controllers/user_controller");

router.post("/signup", addUser);
router.post("/login", userLogin);

module.exports = router;
