const express = require("express");
const router = express.Router();
const authController = require("../controllers/controller.auth");

router.get("/", authController.getUser);

router.post("/api/signup", authController.signup);
router.post("/api/signin", authController.signin);

module.exports = router;
