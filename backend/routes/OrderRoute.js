const express = require("express");
const { createOrder, getSingleOrder } = require("../controller/OrderController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth")
const router = express.Router();

router.route("/order/new").post(isAuthenticatedUser, createOrder);
router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);

module.exports = router;