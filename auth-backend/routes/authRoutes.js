const express = require("express");
const router = express.Router();

// Controllers aur Middleware ko import kiya
const { signup, login, verifyUser } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

// Routes mapping
router.post("/signup", signup);
router.post("/login", login);
router.get("/verify", protect, verifyUser);

module.exports = router;