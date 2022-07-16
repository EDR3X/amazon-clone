const express = require("express");
const router = express.Router();
const authController = require("../controllers/controller.auth");
const auth = require("../middlewares/middleware.user.auth");

router.get("/", authController.getUser);

router.post("/api/signup", authController.signup);
router.post("/api/signin", authController.signin);
router.post("/api/isTokenValid", authController.validateToken);

router.get("/", auth, authController.getUserData);

module.exports = router;
