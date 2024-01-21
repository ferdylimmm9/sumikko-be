const express = require("express");
const router = express.Router();
//controller
const {
  loginController,
  registerController,
} = require("../controllers/user.controller");
//middleware
const { validateLogin, validateRegister } = require("../middlewares/auth");

router.post("/login", validateLogin, loginController);
router.post("/register", validateRegister, registerController);

module.exports = router;
