const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/all").get(protect, allUsers);
router.post("/login", authUser);
router.route("/").post(registerUser);

module.exports = router;
