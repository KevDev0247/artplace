const express = require("express");
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/ProductController");
const { isAuthenticatedUser } = require("../middleware/auth")
const router = express.Router();

router.route("/products").get(getAllProducts);

router.route("/product/new").post(isAuthenticatedUser, createProduct);

router
  .route("/product/:id")
  .put(updateProduct)
  .delete(deleteProduct)
  .get(getSingleProduct);

module.exports = router;
