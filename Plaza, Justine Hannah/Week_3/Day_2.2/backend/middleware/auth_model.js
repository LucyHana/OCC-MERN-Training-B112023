//importing json webtoken
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(403).json({ error: "Access Denied" });
  }

  try {
    const decoded = jwt.verify(token.substring(7), "SECRET");
    req.user = { userId: decoded.id };

    next();
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

module.exports = { authMiddleware };
