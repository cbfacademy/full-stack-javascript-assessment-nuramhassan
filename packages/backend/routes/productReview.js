const express = require("express");
const router = express.Router();

// import controller
const {
  ProductReviewUpload,
  reviewListData,
} = require("../controllers/productReview");

// import validators

router.post("/product-review-upload", ProductReviewUpload);
router.get("/product-review-list", reviewListData);

module.exports = router;