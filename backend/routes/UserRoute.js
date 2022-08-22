const express = require("express");
const { createUser, loginUser, logoutUser } = require("../controller/UserController");
const router = express.Router();

router.route("/registration").post(createUser);

router.route("/login").post(loginUser);

router.route("/logout").post(logoutUser);

module.exports = router;