const express = require("express");
const router = express.Router();
const userController = require("../Users/user.controller");
const auth = require("../middleware/auth")

router.post("/", userController.register);
router.post("/login", userController.login);

module.exports = router;
